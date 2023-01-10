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
                    <h1>
                        Курсы по финансам и&nbsp;инвестициям
                    </h1>
                    <ReactSVG className='top-banner-pic' src="top-banner.svg" />
                    <p>
                        Научитесь управлять своими финансами. 
                        Узнайте, как наращивать капитал и получать дополнительный доход за счет инвестиций
                    </p>
                    <button className='button button-blue'>Смотреть все курсы</button>
                </div>
                <div className='main-content'>
                    <div className='cources-list'>
                        <h2>
                            Все курсы
                        </h2>
                        <div className='cources-list-item'>
                            <div className='item-cover'>
                                <div className='item-badge'>
                                    Начинающим
                                </div>
                            </div>
                            <div className='item-description'>
                                <h3>
                                    Как привести личные финансы в порядок
                                </h3>
                                <p>
                                    5 уроков
                                </p>
                            </div>
                        </div>
                        <div className='cources-list-item'>
                            <div className='item-cover'>
                                <div className='item-badge'>
                                    Начинающим
                                </div>
                            </div>
                            <div className='item-description'>
                                <h3>
                                    Как выйти на пенсию раньше. FIRE-инвестиции
                                </h3>
                                <p>
                                    6 уроков
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
