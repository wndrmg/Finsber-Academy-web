import {
    CoursesAction,
    CoursesActionTypes,
    CoursesState,
} from '@src/redux/reducers/courses/courses.model';

const initialState: CoursesState = {
    courses: [],
    loading: false,
    error: null,
};
export const coursesReducer = (state = initialState, action: CoursesAction) => {
    switch (action.type) {
        case CoursesActionTypes.FETCH_COURSES:
            return {loading: true, error: null, courses: []};
        case CoursesActionTypes.FETCH_COURSES_SUCCESS:
            return {loading: false, error: null, courses: action.payload};
        case CoursesActionTypes.FETCH_COURSES_ERROR:
            return {loading: false, error: action.payload, courses: []};
        default:
            return state;
    }
};
