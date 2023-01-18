import React from 'react'
import {ICourse} from '@src/hooks/useCourses/model'
import {Link} from 'react-router-dom'

interface CourseItemProps {
    course: ICourse
}

export const CourseItem = ({course}: CourseItemProps) => {
    const isActive = course.lessons.length > 0

    return (
        <div className="list-item">
            <Link to="/courses/item">
                <div className={`list-item-inner ${!isActive && 'inactive'}`}>
                    <div className="item-cover" style={{
                        backgroundImage: 'url(' + 'covers/personal-finance.svg' + ')',
                        backgroundPosition: 'center, bottom',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="item-badge">
                            <span>
                                {course.level}
                            </span>
                        </div>
                    </div>
                    <div className="item-description">
                        <h3 className="item-title">
                            {course.title}
                        </h3>
                        <div className="item-lessons-number">
                            {course.lessons.length} уроков
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
