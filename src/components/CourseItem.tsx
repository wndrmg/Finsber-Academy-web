import React from 'react';
import {Link} from 'react-router-dom';

import {ICourse} from '@src/hooks/useCourses/useCourses.model';

interface CourseItemProps {
    course: ICourse;
}

export const CourseItem = ({course}: CourseItemProps) => {
    const isActiveCourse = course.lessons.length > 0;

    return (
        <div className="list-item">
            <Link to={'/courses/' + course.id}>
                <div
                    className={`list-item-inner ${
                        !isActiveCourse && 'inactive'
                    }`}
                >
                    <div
                        className="item-cover"
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
                    <div className="item-description">
                        <h3 className="item-title">{course.title}</h3>
                        <div className="item-lessons-number">
                            {isActiveCourse &&
                                course.lessons.length + ' уроков'}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
