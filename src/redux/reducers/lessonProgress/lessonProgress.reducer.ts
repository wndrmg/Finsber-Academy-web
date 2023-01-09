import type {Action} from 'redux-actions';
import {handleActions} from 'redux-actions';
import {getType} from 'typesafe-actions';

import {LessonProgressState} from '@src/redux/reducers/lessonProgress/lessonProgress.model';

const initialState: LessonProgressState = {
    progress:0,
    finished:false
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

export const lessonProgressReducer = handleActions(reducerMap, initialState);
