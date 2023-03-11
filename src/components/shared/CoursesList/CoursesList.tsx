import React from 'react';
import {useSelector} from 'react-redux';

import {selectCoursesSelector} from '@src/redux/courses/courses.selector';

import {CoursesItem} from '@components/shared/CoursesList/CoursesItem/CoursesItem';

import classes from './CoursesList.module.scss';

export const CoursesList = () => {
    const courses = useSelector(selectCoursesSelector);

    return (
        <div className={classes.coursesList}>
            <h2>Все курсы</h2>
            <div className={classes.listInner}>
                {courses.map((course) => (
                    <CoursesItem course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
};
