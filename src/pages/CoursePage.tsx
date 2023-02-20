import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {selectCoursesSelector} from '@src/redux/reducers/courses/courses.selector';

import {LessonsList} from '@components/shared/LessonsList/LessonsList';
import {PageHero, PageHeroDataType} from '@components/shared/PageHero/PageHero';

export const CoursePage = () => {
    const courses = useSelector(selectCoursesSelector);
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );

    const pageHeroData: PageHeroDataType = {
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
