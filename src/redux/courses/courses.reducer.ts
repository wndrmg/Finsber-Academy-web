import type {Action} from 'redux-actions';
import {handleActions} from 'redux-actions';
import {getType} from 'typesafe-actions';

import {coursesActions} from './courses.actions';
import {
    CheckboxCheckedObject,
    CourseType,
    CoursesProgressType,
    CoursesState,
    TestsObjectType,
} from './courses.model';

const initialState: CoursesState = {
    courses: [],
    isBlockProgress: false,
    radioButtonIsChecked: '',
    isFinished: false,
    coursesProgress: {} as CoursesProgressType,
    checkboxCheckedList: {} as CheckboxCheckedObject,
    testsObject: {} as TestsObjectType,
    currentPage: 0,
};

const setCourses = (
    state: CoursesState,
    action: Action<{courses: CourseType[]}>,
): CoursesState => ({
    ...state,
    courses: action.payload.courses,
});

const setCoursesProgress = (
    state: CoursesState,
    action: Action<CoursesProgressType>,
): CoursesState => {
    return {
        ...state,
        coursesProgress: action.payload,
    };
};

const setIsBlockSwipeLeft = (
    state: CoursesState,
    action: Action<boolean>,
): CoursesState => {
    return {
        ...state,
        isBlockProgress: action.payload,
    };
};
const setIsFinished = (
    state: CoursesState,
    action: Action<boolean>,
): CoursesState => {
    return {
        ...state,
        isFinished: action.payload,
    };
};

const setRadioButtonIsChecked = (
    state: CoursesState,
    action: Action<string>,
): CoursesState => ({
    ...state,
    radioButtonIsChecked: action.payload,
});
const setCheckboxCheckedListCommit = (
    state: CoursesState,
    action: Action<CheckboxCheckedObject>,
): CoursesState => ({
    ...state,
    checkboxCheckedList: action.payload,
});
const setCurrentPageCommit = (
    state: CoursesState,
    action: Action<number>,
): CoursesState => ({
    ...state,
    currentPage: action.payload,
});

const reducerMap: {[key: string]: any} = {
    [getType(coursesActions.setCourses)]: setCourses,
    [getType(coursesActions.setCoursesProgressCommit)]: setCoursesProgress,
    [getType(coursesActions.setIsBlockSwipeLeft)]: setIsBlockSwipeLeft,
    [getType(coursesActions.setIsFinished)]: setIsFinished,
    [getType(coursesActions.setRadioButtonIsCheckedCommit)]:
        setRadioButtonIsChecked,
    [getType(coursesActions.setCheckboxCheckedListCommit)]:
        setCheckboxCheckedListCommit,
    [getType(coursesActions.setCurrentPageCommit)]: setCurrentPageCommit,
};

export const coursesReducer = handleActions(reducerMap, initialState);
