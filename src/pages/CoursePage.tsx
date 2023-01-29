import React from 'react';
import {useParams} from 'react-router-dom';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

import {LessonsList} from '@components/shared/LessonsList/LessonsList';
import {IPageHeroData, PageHero} from '@components/shared/PageHero/PageHero';

interface CoursePageProps {
    coursesData: CoursesState;
}

export const CoursePage = ({coursesData}: CoursePageProps) => {
    const {courses, error, loading} = coursesData;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );

    const pageHeroData: IPageHeroData = {
        pageHeroH1: currentCourse?.title,
        pageHeroP: currentCourse?.description,
        pageHeroButtonLink: `/courses/${currentCourse?.id}/lessons/0`,
        pageHeroButtonText: 'Начать обучение',
        pageHeroImg: 'covers/personal-finance.svg',
        pageHeroLessonsNumber: currentCourse?.lessons.length,
        pageHeroLevel: currentCourse?.level,
    };

    return (
        <main>
            {loading && <div className="loader"></div>}
            {error && <div className="error">{error}</div>}
            {currentCourse && (
                <>
                    <PageHero pageHeroData={pageHeroData} isMainPage={false} />
                    <div className="main-content">
                        <LessonsList currentCourse={currentCourse} />
                    </div>
                </>
            )}
        </main>
    );
};
