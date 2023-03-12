import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';
import {ContentBlock} from '@components/UI/ContentBlock/ContentBlock';
import {selectCoursesSelector, selectCurrentPage} from '@src/redux/courses/courses.selector';
import {useTypedDispatch} from '@src/redux/store';
import {coursesActions} from '@src/redux/courses/courses.actions';

export const LessonPage = () => {
    const dispatch = useTypedDispatch();
    const urlParams = useParams();
    const courses = useSelector(selectCoursesSelector);

    const currentPage = useSelector(selectCurrentPage);
    const currentCourse = courses.find((course) => course.id === urlParams.courseId);
    const currentLesson = currentCourse?.lessons.find((lesson) => lesson.id === urlParams.lessonId);

    useEffect(() => {
        const isBlock = currentLesson?.blocks?.findIndex(v => v?.some(block => block.type.includes('TEST'))) || 0;
        dispatch(coursesActions.setCurrentPageCommit(isBlock));
    }, [currentLesson]);

  
    if (!courses?.length) {
        return <div className='loader'></div>;
    }

    return (
        <main>
            <div className='main-content main-content-lesson'>
                {currentLesson && currentCourse && (
                    <>
                        <div className='back-link'>
                            <Link to='../..' relative='path'>
                                Назад
                            </Link>
                        </div>
                        <LessonsItem
                            lesson={currentLesson}
                            currentCourseId={currentCourse.id}
                            isLessonPage={true}
                            imageBackgroundColor={currentCourse.color}
                        />
                        {currentLesson.blocks.map((block, index) => {
                            const isTestBlock = block.find(
                                (elem) =>
                                    elem.type === 'TEST' || elem.type === 'TEST_CHECKBOX',
                            );
                            const blockType = isTestBlock ? 'test' : 'other';
                            if (index > currentPage) {
                                return null;
                            }
                            return (
                                <ContentBlock
                                    block={block}
                                    blockType={blockType}
                                    blockIndex={index}
                                    key={index}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </main>
    );
};
