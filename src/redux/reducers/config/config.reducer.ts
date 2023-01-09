import type {Action} from 'redux-actions';
import {handleActions} from 'redux-actions';
import {getType} from 'typesafe-actions';

import {configActions} from '@src/redux/reducers/config/config.actions';
import {ConfigState} from '@src/redux/reducers/config/config.model';

const initialState: ConfigState = {
    instruments: [],
    isLoadingConfig: true,
    isErrorConfig: false,
};

const setConfig = (state: ConfigState, action: Action<any>): ConfigState => ({
    ...state,
    ...action.payload,
    isErrorConfig: false,
    isLoadingConfig: false,
});

const setIsLoadingConfig = (
    state: ConfigState,
    action: Action<boolean>,
): ConfigState => ({
    ...state,
    isLoadingConfig: action.payload,
});

const setIsErrorConfig = (
    state: ConfigState,
    action: Action<any>,
): ConfigState => ({
    ...state,
    isErrorConfig: action.payload,
    isLoadingConfig: false,
});

const reducerMap: {[key: string]: any} = {
    [getType(configActions.getConfigCommit)]: setConfig,
    [getType(configActions.setIsLoadingConfig)]: setIsLoadingConfig,
    [getType(configActions.setIsErrorConfig)]: setIsErrorConfig,
};

export const configReducer = handleActions(reducerMap, initialState);
