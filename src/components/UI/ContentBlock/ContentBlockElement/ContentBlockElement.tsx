import React from 'react';

import {IBlock} from '@src/redux/reducers/courses/courses.model';

import classes from '../ContentBlock.module.scss';

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
            <a
                className={classes.blockBanner}
                href={elem.url}
                target="_blank"
                rel="noreferrer"
            >
                <div>
                    <img
                        width="80px"
                        height="80px"
                        src="/covers/personal-finance.svg"
                        alt="promo"
                    />
                </div>
                <div>
                    <h4>{elem.title}</h4>
                    <p>{elem.text}</p>
                </div>
            </a>
        );
    return null;
};
