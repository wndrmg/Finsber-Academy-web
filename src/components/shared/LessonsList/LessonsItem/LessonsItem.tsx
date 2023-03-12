import React from 'react';
import {Link} from 'react-router-dom';

import {LessonType} from '@src/redux/courses/courses.model';

import classes from './LessonsItem.module.scss';
import { getLessonLogo } from '@src/utils/getUrl';

interface LessonsItemItemProps {
    lesson: LessonType;
    currentCourseId: string;
    isLessonPage: boolean;
    imageBackgroundColor: string;
}

export const LessonsItem = ({
    lesson,
    currentCourseId,
    isLessonPage, imageBackgroundColor,
}: LessonsItemItemProps) => {

    const imageUrl = getLessonLogo(currentCourseId, lesson.id);

    if (!isLessonPage) {
        return (
            <div className={classes.listItem}>
                <Link to={`/courses/${currentCourseId}/lessons/${lesson.id}`}>
                    <div className={classes.listItemInner}>
                        <div className={classes.itemCover} style={{backgroundColor: imageBackgroundColor}}>
                            <img src={imageUrl} alt={lesson.title}/>
                        </div>
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
                    <div className={classes.itemCover}>
                        <img src={imageUrl} alt={lesson.title}/>
                    </div>
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
