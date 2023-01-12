import React from 'react'
import { ReactSVG } from 'react-svg';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-inner'>
                <ReactSVG className='header-logo' src="logo.svg" />
            </div>
        </header>
    )
}
