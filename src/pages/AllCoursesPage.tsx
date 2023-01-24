import React from 'react';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

import {CoursesList} from '@components/shared/CoursesList/CoursesList';

interface AllCoursesPageProps {
    coursesData: CoursesState;
}
export const AllCoursesPage = ({coursesData}: AllCoursesPageProps) => {
    return (
        <main>
            <div className="main-content">
                <CoursesList coursesData={coursesData} />
            </div>
        </main>
    );
};
