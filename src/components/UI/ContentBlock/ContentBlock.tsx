import React, {ReactElement} from 'react';

import {ContentBlockType} from '@src/redux/courses/courses.model';

import {ContentBlockElement} from '@components/UI/ContentBlock/ContentBlockElement/ContentBlockElement';

import classes from './ContentBlock.module.scss';
import {RadioButtonTest} from '@components/UI/ContentBlock/RadioButtonTest/RadioButtonTest';

interface BlockProps {
    block: ContentBlockType[];
    blockType: string;
    blockIndex: number;
}
export const ContentBlock = ({block, blockType, blockIndex}: BlockProps) => {
    const liArr: ReactElement[] = [];
    const radioArr: ReactElement[] = [];
    const checkboxArr: ReactElement[] = [];
    const liNumberInBlock = block.filter((elem) => elem.type === 'LI').length;
    const radioNumberInBlock = block.filter(
        (elem) => elem.type === 'TEST',
    ).length;
    const checkboxNumberInBlock = block.filter(
        (elem) => elem.type === 'TEST_CHECKBOX',
    ).length;
    const blockClassName =
        blockType === 'test'
            ? `${classes.contentBlock} ${classes.contentBlockTest}`
            : classes.contentBlock;

    return (
        <div key={blockIndex} className={blockClassName}>
            {block.map((elem, _index) => {

                const key = (elem.text || elem.type + '' + _index).slice(0, 30);

                if (elem.type === 'LI') {
                    liArr.push(<li key={key}>{elem.text}</li>);
                    if (liArr.length === liNumberInBlock) {
                        return <ul key={key}>{liArr}</ul>;
                    }
                }

                if (elem.type === 'TEST') {
                    radioArr.push(<RadioButtonTest blockIndex={blockIndex} key={key} content={elem}/>);
                    if (radioArr.length === radioNumberInBlock) {
                        return <form key={key}>{radioArr}</form>;
                    }
                }

                if (elem.type === 'TEST_CHECKBOX') {
                    checkboxArr.push(
                        <label key={key}>
                            <input
                                name="test"
                                type="checkbox"
                                value={elem.text}
                            />
                            {elem.text}
                        </label>,
                    );
                    if (checkboxArr.length === checkboxNumberInBlock)
                        return <form key={key}>{checkboxArr}</form>;
                }
                return <ContentBlockElement elem={elem} key={key} />;
            })}
        </div>
    );
};
