import React from 'react';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

import {CoursesItem} from '@components/shared/CoursesList/CoursesItem/CoursesItem';

interface CoursesListProps {
    coursesData: CoursesState;
}

export const CoursesList = ({coursesData}: CoursesListProps) => {
    const {courses, error, loading} = coursesData;

    return (
        <>
            <div className="courses-list">
                <h2>Все курсы</h2>
                <div className="list-inner">
                    {loading && <div className="loader"></div>}
                    {error && <div className="error">{error}</div>}
                    {courses.map((course) => (
                        <CoursesItem course={course} key={course.id} />
                    ))}
                </div>
            </div>
        </>
    );
};
