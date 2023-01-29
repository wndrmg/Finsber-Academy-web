import React from 'react';
import {Link} from 'react-router-dom';

import {ILesson} from '@src/redux/reducers/courses/courses.model';

import classes from './LessonsItem.module.scss';

interface LessonsItemItemProps {
    lesson: ILesson;
    currentCourseId: string;
}

export const LessonsItem = ({
    lesson,
    currentCourseId,
}: LessonsItemItemProps) => {
    return (
        <div className={classes.listItem}>
            <Link to={`/courses/${currentCourseId}/lessons/${lesson.id}`}>
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
                            {'Урок ' + (Number(lesson.id) + 1)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
