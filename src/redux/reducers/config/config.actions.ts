import {createAction} from 'typesafe-actions';

export const configActions = {
    getConfig: createAction('@CONFIG/getConfig')(),
    getConfigCommit: createAction<any>('@CONFIG/getConfigCommit.COMMIT')<any>(),
    setIsErrorConfig: createAction('@CONFIG/setIsErrorConfig.COMMIT')<boolean>(),
    setIsLoadingConfig: createAction('@CONFIG/isLoadingConfig.COMMIT')<boolean>(),
};
