import React from 'react'
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-inner'>
                <div className='footer-logo'>
                    <Link to='/'>
                        <ReactSVG src="logo.svg" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
