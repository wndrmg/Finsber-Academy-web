import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {coursesActions} from '@src/redux/courses/courses.actions';
import {RootState} from '@src/redux/store';
import {asyncCache} from '@src/utils/asyncCache';

//let interval: NodeJS.Timer;

export const initCourses = (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        const courses = await asyncCache.get(asyncCache.COURSES);
        if (courses) {
            dispatch(coursesActions.setCourses({courses}));
        }

        const progress = await asyncCache.get(asyncCache.PROGRESS);
        if (progress) {
            dispatch(coursesActions.setCoursesProgressCommit(progress));
        }

        dispatch(coursesActions.updateConfig());
        // дергает постоянно данные из api для тестов
        // if (interval) {
        //     clearInterval(interval);
        // }
        // interval = setInterval(() => {
        //     dispatch(coursesActions.updateConfig());
        // }, 2500);
    };

