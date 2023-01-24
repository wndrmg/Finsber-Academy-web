import React from 'react';

import {ICourse} from '@src/redux/reducers/courses/courses.model';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';

interface LessonsListProps {
    currentCourse: ICourse;
}

export const LessonsList = ({currentCourse}: LessonsListProps) => {
    return (
        <>
            <div className="lessons-list">
                <h2>Все уроки</h2>
                <div className="list-inner">
                    {currentCourse.lessons.length > 0 ? (
                        currentCourse.lessons.map((lesson) => (
                            <LessonsItem
                                lesson={lesson}
                                key={lesson.id}
                                currentCourseId={currentCourse.id}
                            />
                        ))
                    ) : (
                        <div className="error">Уроки еще не добавлены</div>
                    )}
                </div>
            </div>
        </>
    );
};
