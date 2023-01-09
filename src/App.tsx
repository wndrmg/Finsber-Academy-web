import './App.scss';

import classNames from 'classnames';
import React from 'react';

export const App = () => {
    const isOnline = true;
    return (
        <div className="App">
            <div className={classNames('online', isOnline && 'online_true')} />
HELLO WORLD
        </div>
    );
};
