import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg';

export const CourseItem = () => {
    return (
        <div className='page-hero'>
            <div className='page-hero-inner'>
                <div className='item-badge bordered right'>
                    <span>Начинающим</span>
                </div>
                <div className='back-link'>
                    <Link to='..' relative="path">
                        Назад
                    </Link>
                </div>
                <h1>
                    Как привести личные финансы в порядок
                </h1>
                <ReactSVG className='page-hero-pic' src="covers/personal-finance.svg" />
                <p>
                    Вы готовы полностью изменить свою жизнь? Перейти на новый уровень и перестать быть новичком в сфере финансов? 
                    Что, если мечта зарабатывать и делать это с лёгкостью может стать реальностью? Ведь достаточно только начать учиться у лучших!
                </p>
                <div className='item-lessons-number'>
                    5 уроков
                </div>
                <Link to='/courses/item/lesson'>
                    <button className='button button-blue'>
                        Начать обучение
                    </button>
                </Link>
            </div>
        </div>
    )
}
