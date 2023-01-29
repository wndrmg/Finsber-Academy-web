import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import classes from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerInner}>
                <div className={classes.footerLogo}>
                    <Link to="/">
                        <ReactSVG src="logo.svg" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
