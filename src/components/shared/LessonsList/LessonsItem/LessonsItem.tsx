import React from 'react';
import {Link} from 'react-router-dom';

import {LessonType} from '@src/redux/courses/courses.model';

import classes from './LessonsItem.module.scss';

interface LessonsItemItemProps {
    lesson: LessonType;
    currentCourseId: string;
    isLessonPage: boolean;
}

export const LessonsItem = ({
    lesson,
    currentCourseId,
    isLessonPage,
}: LessonsItemItemProps) => {
    if (!isLessonPage) {
        return (
            <div className={classes.listItem}>
                <Link to={`/courses/${currentCourseId}/lessons/${lesson.id}`}>
                    <div className={classes.listItemInner}>
                        <div
                            className={classes.itemCover}
                            style={{
                                backgroundImage:
                                    'url(' +
                                    'covers/personal-finance.svg' +
                                    ')',
                                backgroundPosition: 'center, bottom',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <div className={classes.itemDescription}>
                            <h3>{lesson.title}</h3>
                            <div className={classes.itemLessonsNumber}>
                                {`Урок ${Number(lesson.id) + 1} `}
                                {`(${lesson.timeMinutes} мин.)`}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={`${classes.listItem} ${classes.listItemLesson}`}>
                <div className={classes.listItemInner}>
                    <div
                        className={classes.itemCover}
                        style={{
                            backgroundImage:
                                'url(' + 'covers/personal-finance.svg' + ')',
                            backgroundPosition: 'center, bottom',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={classes.itemDescription}>
                        <h3>{lesson.title}</h3>
                        <div className={classes.itemLessonsNumber}>
                            {`Урок ${Number(lesson.id) + 1} `}
                            {`(${lesson.timeMinutes} мин.)`}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
