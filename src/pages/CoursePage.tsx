import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';
import {
    NUMBER_DECLINATIONS_TEMPLATES,
    numberDeclination,
} from '@src/utils/numberDeclination';

import {LessonsList} from '@components/shared/LessonsList/LessonsList';

interface CoursePageProps {
    coursesData: CoursesState;
}

export const CoursePage = ({coursesData}: CoursePageProps) => {
    const {courses, error, loading} = coursesData;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );

    return (
        <main>
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
                                    {currentCourse.lessons.length + ' '}
                                    {numberDeclination(
                                        currentCourse.lessons.length,
                                        NUMBER_DECLINATIONS_TEMPLATES.lessons,
                                    )}
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
        </main>
    );
};
