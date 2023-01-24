import React from 'react';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

import {PageHero} from '@components/PageHero';
import {CoursesList} from '@components/shared/CoursesList/CoursesList';

interface MainPageProps {
    coursesData: CoursesState;
}
export const MainPage = ({coursesData}: MainPageProps) => {
    return (
        <main>
            <PageHero />
            <div className="main-content">
                <CoursesList coursesData={coursesData} />
            </div>
        </main>
    );
};
