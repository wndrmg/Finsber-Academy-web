import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

export const TopBanner = () => {
    return (
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
                <Link to='courses'>
                    <button className='button button-blue'>
                        Смотреть все курсы
                    </button>
                </Link>
            </div>
        </div>
    )
}
