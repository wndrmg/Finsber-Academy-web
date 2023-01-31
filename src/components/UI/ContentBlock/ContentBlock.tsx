import React, {ReactElement} from 'react';

import {IBlock} from '@src/redux/reducers/courses/courses.model';

import {ContentBlockElement} from '@components/UI/ContentBlock/ContentBlockElement/ContentBlockElement';

import classes from './ContentBlock.module.scss';

interface BlockProps {
    block: IBlock[];
    key: number;
}
export const ContentBlock = ({block}: BlockProps) => {
    const liArr: ReactElement[] = [];
    const radioArr: ReactElement[] = [];
    const liNumberInBlock = block.filter((elem) => elem.type === 'LI').length;
    const radioNumberInBlock = block.filter(
        (elem) => elem.type === 'TEST',
    ).length;

    return (
        <div className={classes.contentBlock}>
            {block.map((elem, index) => {
                if (elem.type === 'LI') {
                    liArr.push(<li key={elem.text}>{elem.text}</li>);
                    if (liArr.length === liNumberInBlock)
                        return <ul key={index}>{liArr}</ul>;
                }
                if (elem.type === 'TEST') {
                    radioArr.push(
                        <label key={elem.text}>
                            <input
                                name="test"
                                type="radio"
                                value={`${elem.isTestTrue}`}
                            />
                            {elem.text}
                        </label>,
                    );
                    if (radioArr.length === radioNumberInBlock)
                        return <form key={index}>{radioArr}</form>;
                }
                return <ContentBlockElement elem={elem} key={index} />;
            })}
        </div>
    );
};
