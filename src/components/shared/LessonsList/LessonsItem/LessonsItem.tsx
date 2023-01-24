import React from 'react';
import {Link} from 'react-router-dom';

import {ILesson} from '@src/redux/reducers/courses/courses.model';

interface LessonsItemItemProps {
    lesson: ILesson;
    currentCourseId: string;
}

export const LessonsItem = ({
    lesson,
    currentCourseId,
}: LessonsItemItemProps) => {
    return (
        <div className="list-item">
            <Link to={`/courses/${currentCourseId}/lessons/${lesson.id}`}>
                <div className="list-item-inner">
                    <div
                        className="item-cover"
                        style={{
                            backgroundImage:
                                'url(' + 'covers/personal-finance.svg' + ')',
                            backgroundPosition: 'center, bottom',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className="item-description">
                        <h3 className="item-title">{lesson.title}</h3>
                        <div className="item-lessons-number">
                            {'Урок ' + (Number(lesson.id) + 1)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
