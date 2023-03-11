import React from 'react';

import {CourseType} from '@src/redux/courses/courses.model';
import {
    NUMBER_DECLINATIONS_TEMPLATES,
    numberDeclination,
} from '@src/utils/numberDeclination';

import {KohanaLink} from '@components/shared/KohanaLink/KohanaLink';

import classes from './CoursesItem.module.scss';

interface CoursesItemProps {
    course: CourseType;
}

export const CoursesItem = ({course}: CoursesItemProps) => {
    const isActiveCourse = course.lessons.length > 0;

    return (
        <div className={classes.listItem}>
            <KohanaLink isLink={isActiveCourse} link={`/courses/${course.id}`}>
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
            </KohanaLink>
        </div>
    );
};
