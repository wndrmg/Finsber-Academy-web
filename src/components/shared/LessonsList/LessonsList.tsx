import React from 'react';

import {CourseType} from '@src/redux/courses/courses.model';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';

import classes from './LessonsList.module.scss';

interface LessonsListProps {
    currentCourse: CourseType;
}

export const LessonsList = ({currentCourse}: LessonsListProps) => {
    return (
        <div className={classes.lessonsList}>
            <h2>Все уроки</h2>
            <div className={classes.listInner}>
                {currentCourse.lessons.length > 0 ? (
                    currentCourse.lessons.map((lesson) => (
                        <LessonsItem
                            lesson={lesson}
                            key={lesson.id}
                            currentCourseId={currentCourse.id}
                            isLessonPage={false}
                        />
                    ))
                ) : (
                    <div className="error">Уроки еще не добавлены</div>
                )}
            </div>
        </div>
    );
};
