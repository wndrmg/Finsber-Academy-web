import {createSelector} from 'reselect';

import {RootState, Selector} from '../store';
import {
    CourseProgressType,
    CourseType,
    LessonProgressType,
    LessonType,
} from './courses.model';

const coursesSelector = (state: RootState) => state.courses;
export const selectCoursesSelector = createSelector(
    coursesSelector,
    (state) => state.courses,
);
export const selectIsBlockProgressSelector = createSelector(
    coursesSelector,
    (state) => state.isBlockProgress,
);
export const selectIsFinished = createSelector(
    coursesSelector,
    (state) => state.isFinished,
);
export const selectRadioButtonIsCheckedSelector = createSelector(
    coursesSelector,
    (state) => state.radioButtonIsChecked,
);
export const selectCheckboxCheckedList = createSelector(
    coursesSelector,
    (state) => state.checkboxCheckedList,
);
export const selectTestsObject = createSelector(
    coursesSelector,
    (state) => state.testsObject,
);
export const selectCurrentPage = createSelector(
    coursesSelector,
    (state) => state.currentPage,
);
export const selectLessonProgress = (
    courseId: string,
    lessonId: string,
): Selector<LessonProgressType | null> =>
    createSelector([coursesSelector], (courses) => {
        return (
            courses?.coursesProgress?.[courseId]?.lessons?.[lessonId] || null
        );
    });
export const selectCourseProgress = (
    courseId: string,
): Selector<CourseProgressType | null> =>
    createSelector([coursesSelector], (courses) => {
        return courses?.coursesProgress?.[courseId] || null;
    });
export const selectCourse = (courseId: string): Selector<CourseType | null> =>
    createSelector([coursesSelector], (courses) => {
        return courses?.courses?.find((v) => v.id === courseId) || null;
    });

export const selectLesson = (
    courseId: string,
    lessonId: string,
): Selector<LessonType | null> =>
    createSelector([selectCourse(courseId)], (course) => {
        return (
            course?.lessons?.find((lesson) => lesson.id === lessonId) || null
        );
    });
