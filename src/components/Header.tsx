import React from 'react'
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-inner'>
                <div className='header-logo'>
                    <Link to='/'>
                        <ReactSVG src="logo.svg" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
