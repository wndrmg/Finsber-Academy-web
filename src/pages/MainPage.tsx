import React from 'react';

import {CourseData} from '@src/hooks/useCourses/useCourses.model';

import {CoursesList} from '@components/CoursesList';
import {PageHero} from '@components/PageHero';

interface MainPageProps {
    getCourses: {
        courses: CourseData;
        error: string;
        loading: boolean;
    };
}
export const MainPage = ({getCourses}: MainPageProps) => {
    return (
        <main>
            <PageHero />
            <div className="main-content">
                <CoursesList getCourses={getCourses} />
            </div>
        </main>
    );
};
