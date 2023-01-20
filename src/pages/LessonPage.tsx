import React from 'react';
import {useParams} from 'react-router-dom';

import {CourseData} from '@src/hooks/useCourses/useCourses.model';

interface LessonPageProps {
    getCourses: {
        courses: CourseData;
        error: string;
        loading: boolean;
    };
}

export const LessonPage = ({getCourses}: LessonPageProps) => {
    const {courses, error, loading} = getCourses;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );
    const currentLesson = currentCourse?.lessons.find(
        (lesson) => lesson.id === urlParams.lessonId,
    );

    return (
        <div className="main-content">
            {loading && <div className="loader"></div>}
            {error && <div className="error">{error}</div>}
            {currentLesson ? (
                <h1>{currentLesson.title}</h1>
            ) : (
                <div className="error">Урок не найден</div>
            )}
        </div>
    );
};
