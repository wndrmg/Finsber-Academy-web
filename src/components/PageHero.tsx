import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

export const PageHero = () => {
    return (
        <div className="page-hero">
            <div className="page-hero-inner">
                <h1>Курсы по финансам и&nbsp;инвестициям</h1>
                <ReactSVG
                    className="page-hero-pic"
                    src="covers/top-banner.svg"
                />
                <p className="page-hero-main">
                    Научитесь управлять своими финансами. Узнайте, как
                    наращивать капитал и получать дополнительный доход за счет
                    инвестиций
                </p>
                <Link to="/courses">
                    <button className="button button-blue">
                        Смотреть все курсы
                    </button>
                </Link>
            </div>
        </div>
    );
};
