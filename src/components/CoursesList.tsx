import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const CoursesList = () => {
    return (
        <>
            <div className='courses-list'>
                <h2>
                    Все курсы
                </h2>
                <div className='list-inner'>
                    <div className='list-item'>
                        <Link to='/courses/item'>
                            <div className='list-item-inner'>
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
                        </Link>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-inner inactive'>
                            <div className='item-cover' style={{  
                                backgroundImage: 'url(' + 'covers/fire-investments.svg' + ')',
                                backgroundPosition: 'center, bottom',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className='item-badge'>
                                    <span>Начинающим</span>
                                </div>
                            </div>
                            <div className='item-description'>
                                <h3>
                                    Как выйти на пенсию раньше. FIRE-инвестиции
                                </h3>
                                <div className='item-lessons-number'>
                                    6 уроков
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
