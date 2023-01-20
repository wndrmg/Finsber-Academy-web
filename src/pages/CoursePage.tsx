import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {ReactSVG} from 'react-svg';
import {CourseData} from '@src/hooks/useCourses/useCourses.model';

interface CoursePageProps {
    getCourses: {
        courses: CourseData,
        error: string,
        loading: boolean
    }
}

export const CoursePage = ({getCourses}: CoursePageProps) => {
    const urlParams = useParams()
    const {courses, error, loading} = getCourses
    const currentCourse = courses.find(course => course.id === urlParams.id)

    if (currentCourse) {
        return (
            <>
                {loading && <div className="loader"></div>}
                {error && <div className="error">{error}</div>}
                <div className="page-hero">
                    <div className="page-hero-inner">
                        <div className="item-badge bordered right">
                            <span>{currentCourse?.level}</span>
                        </div>
                        <div className="back-link">
                            <Link to=".." relative="path">
                                Назад
                            </Link>
                        </div>
                        <h1>
                            {currentCourse?.title}
                        </h1>
                        <ReactSVG className="page-hero-pic" src="covers/personal-finance.svg"/>
                        <p>
                            {currentCourse?.description}
                        </p>
                        <div className="item-lessons-number">
                            <span>
                                {currentCourse?.lessons.length} уроков
                            </span>
                        </div>
                        <Link to="/courses/item/lesson">
                            <button className="button button-blue">
                                Начать обучение
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="main-content">
                    <div className="lessons-list">
                        <h2>Уроки</h2>
                        <div className="list-inner">
                            <div className="list-item">
                                <Link to="/courses/item/lesson">
                                    <div className="list-item-inner">
                                        <div className="item-cover" style={{
                                            backgroundImage: 'url(' + 'covers/personal-finance.svg' + ')',
                                            backgroundPosition: 'center, bottom',
                                            backgroundRepeat: 'no-repeat'
                                        }}>
                                        </div>
                                        <div className="item-description">
                                            <h3 className="item-title">
                                                Значимость ведения учета личных финансов
                                            </h3>
                                            <div className="item-lessons-number">
                                                Урок 1
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="list-item">
                                <div className="list-item-inner inactive">
                                    <div className="item-cover" style={{
                                        backgroundImage: 'url(' + 'covers/fire-investments.svg' + ')',
                                        backgroundPosition: 'center, bottom',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div className="item-badge">
                                            <span>Начинающим</span>
                                        </div>
                                    </div>
                                    <div className="item-description">
                                        <h3>
                                            Как выйти на пенсию раньше. FIRE-инвестиции
                                        </h3>
                                        <div className="item-lessons-number">
                                            6 уроков
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return null
}
