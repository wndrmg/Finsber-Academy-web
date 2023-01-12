import React from 'react'
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
                <button className='button button-blue'>
                    Скачать приложение
                </button>
            </div>
        </div>
    )
}
