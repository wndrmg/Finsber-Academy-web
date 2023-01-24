import React from 'react';
import {useParams} from 'react-router-dom';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

interface LessonPageProps {
    coursesData: CoursesState;
}

export const LessonPage = ({coursesData}: LessonPageProps) => {
    const {courses, error, loading} = coursesData;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );
    const currentLesson = currentCourse?.lessons.find(
        (lesson) => lesson.id === urlParams.lessonId,
    );

    return (
        <main>
            <div className="main-content">
                {loading && <div className="loader"></div>}
                {error && <div className="error">{error}</div>}
                {currentLesson ? (
                    <h1>{currentLesson.title}</h1>
                ) : (
                    <div className="error">Урок не найден</div>
                )}
            </div>
        </main>
    );
};
