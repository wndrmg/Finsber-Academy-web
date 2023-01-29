import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import classes from './Header.module.scss';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.headerLogo}>
                    <Link to="/">
                        <ReactSVG src="logo.svg" />
                    </Link>
                </div>
            </div>
        </header>
    );
};
