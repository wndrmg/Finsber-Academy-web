import {createAction} from 'typesafe-actions';

export const webSocketActions = {
    initCase: createAction('@WebSocket/initCase')(),
    setIsOnline: createAction('@WebSocket/setIsOnline.COMMIT')<boolean>(),
};
