import {createSelector} from 'reselect';

import {RootState} from '@src/redux/store';

const coursesSelector = (state: RootState) => state.courses;
export const selectCoursesSelector = createSelector(
    coursesSelector,
    (state) => state.courses,
);
