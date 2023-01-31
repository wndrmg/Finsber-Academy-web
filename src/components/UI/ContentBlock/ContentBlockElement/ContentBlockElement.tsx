import React from 'react';

import {IBlock} from '@src/redux/reducers/courses/courses.model';

interface BlockElementProps {
    elem: IBlock;
}
export const ContentBlockElement = ({elem}: BlockElementProps) => {
    if (elem.type === 'LI') return null;
    if (elem.type === 'TEST') return null;
    if (elem.type === 'TEXT') return <p>{elem.text}</p>;
    if (elem.type === 'H1') return <h2>{elem.text}</h2>;
    if (elem.type === 'H2') return <h3>{elem.text}</h3>;
    if (elem.type === 'LINK')
        return (
            <a href={elem.url} target="_blank" rel="noreferrer">
                <h4>{elem.title}</h4>
                <img src="https://via.placeholder.com/80" alt="promo" />
                <p>{elem.text}</p>
            </a>
        );
    return null;
};
