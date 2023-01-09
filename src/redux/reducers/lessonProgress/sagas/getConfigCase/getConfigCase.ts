import {call} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

import {GET_CONFIG_COMMAND, RequestApi} from '@src/api/v1/apiV1';
import {configActions} from '@src/redux/reducers/config/config.actions';
import {webSocket} from '@src/redux/reducers/webSocket/sagas/webSocketInitCase';
import {RootAction} from '@src/redux/store.actions';

const getConfigCall = async () =>
    webSocket.socket.send(
        JSON.stringify({type: GET_CONFIG_COMMAND} as RequestApi),
    );

export function* getConfigCase(
    event: Extract<RootAction, ActionType<typeof configActions.getConfig>>,
): Generator {
    yield call(getConfigCall);
}
