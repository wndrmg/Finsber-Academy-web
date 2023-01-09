import type {Action} from 'redux-actions';
import {handleActions} from 'redux-actions';
import {getType} from 'typesafe-actions';

import {webSocketActions} from '@src/redux/reducers/webSocket/webSocket.actions';
import {WebSocketState} from '@src/redux/reducers/webSocket/webSocket.model';

const initialState: WebSocketState = {
    isOnline: false,
};

const setIsOnline = (
    state: WebSocketState,
    action: Action<boolean>,
): WebSocketState => ({
    ...state,
    isOnline: action.payload,
});

const reducerMap: {[key: string]: any} = {
    [getType(webSocketActions.setIsOnline)]: setIsOnline,
};

export const webSocketReducer = handleActions(reducerMap, initialState);
