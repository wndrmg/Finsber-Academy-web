import {useTypedDispatch} from '../redux/store';
import React, {useEffect} from 'react';
import {coursesActions} from '../redux/courses/courses.actions';

export const InitHook = () => {
    const dispatch = useTypedDispatch();

    useEffect(() => {
    /** инициализация приложения */
        dispatch(coursesActions.initCourses());
    }, []);

    return <></>;
};
 