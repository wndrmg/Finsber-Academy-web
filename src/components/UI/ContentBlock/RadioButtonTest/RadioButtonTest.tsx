import React, {useEffect, useRef, useState} from 'react';

import {useTypedDispatch} from '@src/redux/store';
import {useSelector} from 'react-redux';
import {ContentBlockType} from '@src/redux/courses/courses.model';
import {selectCoursesSelector, selectCurrentPage} from '@src/redux/courses/courses.selector';
import {coursesActions} from '@src/redux/courses/courses.actions';

import S from './RadioButtonTest.module.scss';
import {useParams} from 'react-router-dom';

interface RadioButtonTestProps {
    content: ContentBlockType;
    blockIndex: number;
}

export const RadioButtonTest = ({content, blockIndex}: RadioButtonTestProps) => {
    const urlParams = useParams();
    const dispatch = useTypedDispatch();
    const courses = useSelector(selectCoursesSelector);
    const currentPage = useSelector(selectCurrentPage);
    const currentCourse = courses.find((course) => course.id === urlParams.courseId);
    const currentLesson = currentCourse?.lessons.find((lesson) => lesson.id === urlParams.lessonId);
    const [isDispatched, setIsDispatched] = useState(false);
    const ref = useRef<HTMLInputElement>(null)
    const isTrue = typeof content.isTestTrue === 'boolean' && content.isTestTrue;
    const [isChecked, setIsChecked] = useState(false);
    useEffect(()=>{
        console.log('ref?.current?.checked', ref?.current?.checked);
        setIsChecked(!!ref?.current?.checked)
    }, [ref?.current?.checked])
    console.log('blockIndex', blockIndex);
    const onClickRadio = () => {
        //console.log(content.text);
        dispatch(coursesActions.setRadioButtonIsCheckedCommit(content.text));
        if(isDispatched){
            return
        }
        if (isTrue) {
            setIsDispatched(true)
            const isBlock = currentLesson?.blocks
                ?.findIndex((v, index) => {
                    return index > currentPage && v?.some(block => block.type.includes('TEST'));
                }) ||
        (currentLesson?.blocks?.length || 1) - 1;
            const lastPage = currentLesson?.blocks?.length;
            console.log('lastPage', lastPage);
            console.log('isBlock', isBlock);
            console.log('currentLesson', currentLesson);

            if (isBlock === -1 && lastPage) {
                dispatch(coursesActions.setCurrentPageCommit(lastPage));
            } else {
                dispatch(coursesActions.setCurrentPageCommit(isBlock));
            }
        }
    };
    return (
        <>
            <label>
                <input
                    ref={ref}
                    name={blockIndex.toString()}
                    type='radio'
                    value={content.text}
                    // checked={radioButtonIsChecked === content.text}
                    onChange={onClickRadio}
                />
                {content?.text}
            </label>

            <div>
                {isChecked && (
                    <span className={`${S.textStatus} ${isTrue ? S.textStatusTrue : S.textStatusFalse}`}>{isTrue ? 'Верно' : 'Неверно'}</span>
                )}
            </div>
        </>
    );
};
