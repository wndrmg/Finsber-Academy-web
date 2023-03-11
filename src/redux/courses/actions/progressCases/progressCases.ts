import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {asyncCache} from '@src/utils/asyncCache';
import {RootState} from '../../../store';
import {coursesActions} from '../../courses.actions';
import {CourseProgressType, SetLessonProgressParams} from '../../courses.model';

export const setLessonProgress =
    ({
        courseId,
        lessonId,
        lessonProgressPercent,
        currentPage,
        pages,
        isFinished,
    }: SetLessonProgressParams): ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
    > =>
        async (dispatch, getState) => {
            const state = getState().courses;

            const lessons = {
                ...state.coursesProgress?.[courseId]?.lessons,
                [lessonId]: {
                    lessonProgressPercent,
                    currentPage,
                    pages,
                    isFinished,
                },
            };

            const countLessons =
            state?.courses?.find((v) => v.id === courseId)?.lessons?.length ||
            0;
            const lessonsValues = Object.values(lessons);
            const equalLengthFinishedAndAllLessons =
            countLessons === lessonsValues.length;

            const course: CourseProgressType = {
                ...state.coursesProgress?.[courseId],
                courseProgressCount:
                lessonsValues?.filter((v) => v.isFinished).length || 0,
                courseProgressPercent: Number(
                    ((lessonsValues?.filter((v) => v.isFinished).length || 0) *
                    100) /
                    countLessons,
                ).toFixed(),
            };

            if (
                isFinished &&
            equalLengthFinishedAndAllLessons &&
            lessonsValues.every((v) => v.isFinished)
            ) {
                course.isFinished = true;
            }

            const coursesProgress = {
                ...state.coursesProgress,
                [courseId]: {
                    ...course,
                    lessons,
                },
            };

            asyncCache.save(asyncCache.PROGRESS, coursesProgress);
            dispatch(coursesActions.setCoursesProgressCommit(coursesProgress));
        };
