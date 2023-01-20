import React from 'react';

import {CourseData} from '@src/hooks/useCourses/useCourses.model';

import {CoursesList} from '@components/CoursesList';

interface AllCoursesPageProps {
    getCourses: {
        courses: CourseData;
        error: string;
        loading: boolean;
    };
}
export const AllCoursesPage = ({getCourses}: AllCoursesPageProps) => {
    return (
        <main>
            <div className="main-content">
                <CoursesList getCourses={getCourses} />
            </div>
        </main>
    );
};
