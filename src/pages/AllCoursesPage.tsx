import React from 'react';
import {CoursesList} from '@components/CoursesList';
import {CourseData} from '@src/hooks/useCourses/useCourses.model';

interface AllCoursesPageProps {
    getCourses: {
        courses: CourseData,
        error: string,
        loading: boolean
    }
}
export const AllCoursesPage = ({getCourses}: AllCoursesPageProps) => {
    return (
        <main>
            <div className='main-content'>
                <CoursesList getCourses={getCourses} />
            </div>
        </main>
    );
};