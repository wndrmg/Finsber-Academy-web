import './App.scss';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import React from 'react';

export const App = () => {
    
    return (
        <div className="App">
            <header className='header'>
                <ReactSVG className='header-logo' src="logo.svg" />
            </header>
            <main>
                <div className='top-banner'>
                    <div className='top-banner-inner'>
                        <h1>
                            Курсы по финансам и&nbsp;инвестициям
                        </h1>
                        <ReactSVG className='top-banner-pic' src="covers/top-banner.svg" />
                        <p>
                            Научитесь управлять своими финансами. 
                            Узнайте, как наращивать капитал и получать дополнительный доход за счет инвестиций
                        </p>
                        <button className='button button-blue'>
                            Скачать приложение
                        </button>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='cources-list'>
                        <h2>
                            Все курсы
                        </h2>
                        <a href='#'>
                            <div className='cources-list-item'>
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
                        </a>
                        <div className='cources-list-item inactive'>
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
            </main>
        </div>
    );
};
