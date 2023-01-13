import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const CourseItem = () => {
    return (
        <div className='course-header'>
            <Link to='..' relative="path">
                Назад
            </Link>
            <div className='course-header-inner'>
                <div className='course-header-item'>
                    <div className='item-cover' style={{  
                        backgroundImage: 'url(' + 'covers/personal-finance.svg' + ')',
                        backgroundPosition: 'center, bottom',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='item-badge'>
                            <span>Начинающим</span>
                        </div>
                    </div>
                    <div className='item-description'>
                        <h3 className='item-title'>
                            Как привести личные финансы в порядок
                        </h3>
                        <div className='item-lessons-number'>
                            5 уроков
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
