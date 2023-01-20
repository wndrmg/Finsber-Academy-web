import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import {CourseData} from '@src/hooks/useCourses/useCourses.model';

import {LessonsList} from '@components/shared/LessonsList/LessonsList';

interface CoursePageProps {
    getCourses: {
        courses: CourseData;
        error: string;
        loading: boolean;
    };
}

export const CoursePage = ({getCourses}: CoursePageProps) => {
    const {courses, error, loading} = getCourses;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );

    return (
        <>
            {loading && <div className="loader"></div>}
            {error && <div className="error">{error}</div>}
            {currentCourse && (
                <>
                    <div className="page-hero">
                        <div className="page-hero-inner">
                            <div className="item-badge bordered right">
                                <span>{currentCourse?.level}</span>
                            </div>
                            <div className="back-link">
                                <Link to=".." relative="path">
                                    Назад
                                </Link>
                            </div>
                            <h1>{currentCourse.title}</h1>
                            <ReactSVG
                                className="page-hero-pic"
                                src="covers/personal-finance.svg"
                            />
                            <p>{currentCourse.description}</p>
                            <div className="item-lessons-number">
                                <span>
                                    {currentCourse.lessons.length} уроков
                                </span>
                            </div>
                            <Link to={`/courses/${currentCourse.id}/lessons/0`}>
                                <button className="button button-blue">
                                    Начать обучение
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="main-content">
                        <LessonsList currentCourse={currentCourse} />
                    </div>
                </>
            )}
        </>
    );
};
