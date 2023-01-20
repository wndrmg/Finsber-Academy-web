import React from 'react';
import {PageHero} from '@components/PageHero';
import {CoursesList} from '@components/CoursesList';
import {CourseData} from '@src/hooks/useCourses/useCourses.model';

interface MainPageProps {
    getCourses: {
        courses: CourseData,
        error: string,
        loading: boolean
    }
}
export const MainPage = ({getCourses}: MainPageProps) => {
    return (
        <main>
            <PageHero />
            <div className='main-content'>
                <CoursesList getCourses={getCourses} />
            </div>
        </main>
    );
};