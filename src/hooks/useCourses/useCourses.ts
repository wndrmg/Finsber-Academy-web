import {useEffect} from 'react';

import {fetchCourses} from '@src/redux/reducers/courses/courses.actions';
import {useTypedDispatch, useTypedSelector} from '@src/redux/store';

export const useCourses = () => {
    const dispatch = useTypedDispatch();
    const {courses, loading, error} = useTypedSelector(
        (state) => state.courses,
    );

    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    return {courses, loading, error};
};
