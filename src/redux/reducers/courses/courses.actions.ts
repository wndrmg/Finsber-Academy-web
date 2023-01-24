import axios from 'axios';
import {Dispatch} from 'redux';

import {
    CoursesAction,
    CoursesActionTypes,
} from '@src/redux/reducers/courses/courses.model';

export const fetchCourses = () => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        try {
            dispatch({type: CoursesActionTypes.FETCH_COURSES});
            const response = await axios.get('/api/config');

            dispatch({
                type: CoursesActionTypes.FETCH_COURSES_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: CoursesActionTypes.FETCH_COURSES_ERROR,
                payload: e.message,
            });
        }
    };
};
