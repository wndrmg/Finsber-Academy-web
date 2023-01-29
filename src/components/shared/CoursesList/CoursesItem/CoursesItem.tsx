import React from 'react';
import {Link} from 'react-router-dom';

import {ICourse} from '@src/redux/reducers/courses/courses.model';
import {
    NUMBER_DECLINATIONS_TEMPLATES,
    numberDeclination,
} from '@src/utils/numberDeclination';

import classes from './CoursesItem.module.scss';

interface CoursesItemProps {
    course: ICourse;
}

export const CoursesItem = ({course}: CoursesItemProps) => {
    const isActiveCourse = course.lessons.length > 0;

    return (
        <div className={classes.listItem}>
            <Link to={`/courses/${course.id}`}>
                <div
                    className={`${classes.listItemInner} ${
                        !isActiveCourse && 'inactive'
                    }`}
                >
                    <div
                        className={classes.itemCover}
                        style={{
                            backgroundImage:
                                'url(' + 'covers/personal-finance.svg' + ')',
                            backgroundPosition: 'center, bottom',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="item-badge">
                            <span>{course.level}</span>
                        </div>
                    </div>
                    <div className={classes.itemDescription}>
                        <h3>{course.title}</h3>
                        <div className={classes.itemLessonsNumber}>
                            {isActiveCourse && (
                                <span>
                                    {`${course.lessons.length} `}
                                    {numberDeclination(
                                        course.lessons.length,
                                        NUMBER_DECLINATIONS_TEMPLATES.lessons,
                                    )}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
