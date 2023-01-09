import {Dispatch} from 'redux';
import {createAction} from 'typesafe-actions';

import {GET_USER_DATA_COMMAND, RequestApi} from '@src/api/v1/apiV1';
import {webSocket} from '@src/redux/reducers/webSocket/sagas/webSocketInitCase';

export const userActions = {
    setIsLoadingUserData: createAction(
        '@CONFIG/setIsLoadingUserData.COMMIT',
    )<boolean>(),
    getUserData: async (dispatch: Dispatch) => {
        webSocket.socket.send(
            JSON.stringify({type: GET_USER_DATA_COMMAND} as RequestApi),
        );
        dispatch(userActions.setIsLoadingUserData(true));
    },
};
