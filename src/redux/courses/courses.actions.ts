import {createAction} from 'typesafe-actions';

import {coursesCase} from './actions';
import {
    CheckboxCheckedObject,
    CourseType,
    CoursesProgressType,
    TestsObjectType,
} from './courses.model';

export const coursesActions = {
    // Case
    updateConfig: coursesCase.updateConfig,
    initCourses: coursesCase.initCourses,
    setLessonProgress: coursesCase.setLessonProgress,

    // Commit
    setCourses: createAction('@courses.setCourses.COMMIT')<{
        courses: CourseType[];
    }>(),
    setCoursesProgressCommit: createAction(
        '@courses.setCoursesProgressCommit.COMMIT',
    )<CoursesProgressType>(),
    setIsBlockSwipeLeft: createAction('@courses.setIsBlockSwipeLeft.COMMIT')<
    boolean | number
    >(),
    setIsFinished: createAction('@courses.setIsFinished.COMMIT')<boolean>(),
    setRadioButtonIsCheckedCommit: createAction(
        '@courses.setRadioButtonIsCheckedCommit.COMMIT',
    )<string>(),
    setCheckboxCheckedListCommit: createAction(
        '@courses.setCheckboxCheckedListCommit.COMMIT',
    )<CheckboxCheckedObject>(),
    setTestsObject: createAction(
        '@courses.setTestsObject.COMMIT',
    )<TestsObjectType>(),
    setCurrentPageCommit: createAction(
        '@courses.setCurrentPageCommit.COMMIT',
    )<number>(),
};
