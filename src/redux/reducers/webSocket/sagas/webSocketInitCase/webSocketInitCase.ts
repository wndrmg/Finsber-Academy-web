import {eventChannel} from 'redux-saga';
import {call, put, select, take} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

import {GET_CONFIG_COMMAND} from '@src/api/v1/apiV1';
import {webSocketActions} from '@src/redux/reducers/webSocket';
import {
    WebSocketError,
    WebSocketErrorType,
} from '@src/redux/reducers/webSocket/webSocket.model';
import {getIsOnline} from '@src/redux/reducers/webSocket/webSocket.selector';
import {RootAction} from '@src/redux/store.actions';

const socketServerURL = 'ws://localhost:8080/ws/v1';
let socket: WebSocket = new WebSocket(socketServerURL);
export const webSocket = {
    socket,
};

const connect = async (): Promise<WebSocket> => {
    socket = new WebSocket(socketServerURL);
    return new Promise((resolve, reject) => {
        if (socket) {
            socket.onopen = function onOpen(event) {
                console.log('onopen', {socket, event});
                socket && resolve(socket);
            };
        }
        setTimeout(() => {
            reject({
                message: 'WebSocket connect timeout',
                type: WebSocketErrorType.WEB_SOCKET_TIMEOUT,
            } as WebSocketError);
        }, 1000);
    });
};
const reconnectWebsocket = (
    socket: WebSocket,
    event: Event,
    emit: (input: any) => void,
) => {
    // TODO логи ошибок, отправка в грейлог
    setTimeout(() => {
        emit(webSocketActions.setIsOnline(false));
        emit(webSocketActions.initCase());
    }, 2000);
};
const createSocketChannel = (socket: WebSocket) =>
    eventChannel((emit) => {
        // init config
        socket.send(JSON.stringify({
            type: GET_CONFIG_COMMAND,
            // payload: {uuid: 'UUID', token: 'TOKEN'},
        }));
        socket.onerror = (error) => {
            // TODO логи ошибок, отправка в грейлог
            reconnectWebsocket(socket, error, emit);
        };
        socket.onclose = (event) => {
            // TODO логи ошибок, отправка в грейлог
            reconnectWebsocket(socket, event, emit);
        };
        socket.onmessage = (dataRaw: MessageEvent) => {
            const data = JSON.parse(dataRaw.data);
            const {type, payload}: {type: string; payload: any} = data;
            console.log('data', data);
            // диспатчим в редакс
            emit(data);
        };
        return () => {
            socket.close();
        };
    });

// const webSocketErrorChannel: Channel<any> = channel();
//
// // saga that listens to the socket and puts the new data into the reducer
// export function* webSocketErrorSaga() {
//     while (true) {
//         // @ts-ignore
//         const action = yield take(webSocketErrorChannel);
//         yield put(action);
//     }
// }

export const webSocketInitCase = function* (
    event: Extract<RootAction, ActionType<typeof webSocketActions.initCase>>,
) {
    const isOnline = (yield select(getIsOnline)) as ReturnType<
        typeof getIsOnline
    >;
    if (isOnline) {
        return;
    }

    try {
        const wSocket: WebSocket = (yield call(connect)) as Awaited<ReturnType<typeof connect>>;

        const socketChannel = (yield call(
            createSocketChannel,
            wSocket,
        )) as Awaited<ReturnType<typeof createSocketChannel>>;

        yield put(webSocketActions.setIsOnline(true));
        while (true) {
            // @ts-ignore
            const payload = yield take(socketChannel);
            yield put(payload);
            console.log('payload', payload);
        }
    } catch (e) {
        // TODO логи ошибок, отправка в грейлог
        console.log('ERROR webSocketInitCase: ', e);
        yield put(webSocketActions.initCase());
    }
};
