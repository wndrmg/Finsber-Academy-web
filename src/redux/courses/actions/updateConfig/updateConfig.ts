import axios from 'axios';
import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {asyncCache} from '@src/utils/asyncCache';
import {RootState} from '@src/redux/store';
import {coursesActions} from '@src/redux/courses/courses.actions';

let abortControllerUpdateConfig = new AbortController();
export const updateConfig =
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
        async (dispatch, getState) => {
            abortControllerUpdateConfig.abort();
            abortControllerUpdateConfig = new AbortController();
 
            const courses = (
                await axios.get('/api/config', {
                    signal: abortControllerUpdateConfig.signal,
                })
            ).data;

            const state = getState();
            const newCoursesString = JSON.stringify(courses);
            // Проверяем, чтобы не пушить одинаковые курсы в редакс
            if (newCoursesString !== JSON.stringify(state.courses.courses)) {
                dispatch(coursesActions.setCourses({courses}));
                await asyncCache.save(asyncCache.COURSES, courses);
                console.log('new courses saved');
            }
        };
