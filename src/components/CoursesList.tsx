import React from 'react'
import {Outlet} from 'react-router-dom'
//import {useCourses} from '@src/hooks/useCourses/useCourses'
import {CourseItem} from '@components/CourseItem'
import {CourseData} from '@src/hooks/useCourses/useCourses.model';

interface CoursesListProps {
    getCourses: {
        courses: CourseData,
        error: string,
        loading: boolean
    }
}

export const CoursesList = ({getCourses}: CoursesListProps) => {

    const {courses, error, loading} = getCourses

    return (
        <>
            <div className='courses-list'>
                <h2>
                    Все курсы
                </h2>
                <div className='list-inner'>
                    { loading && <div className="loader"></div> }
                    { error && <div className="error">{error}</div> }
                    { courses.map(course =>
                        <CourseItem course={course} key={course.id}/>
                    ) }
                </div>
            </div>
            <Outlet />
        </>
    )
}
