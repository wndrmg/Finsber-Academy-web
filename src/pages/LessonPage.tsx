import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';
import {ContentBlock} from '@components/UI/ContentBlock/ContentBlock';
import { selectCoursesSelector } from '@src/redux/courses/courses.selector';

export const LessonPage = () => {
    const courses = useSelector(selectCoursesSelector);
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );
    const currentLesson = currentCourse?.lessons.find(
        (lesson) => lesson.id === urlParams.lessonId,
    );
    console.log(currentLesson?.blocks);
    return (
        <main>
            <div className="main-content main-content-lesson">
                {currentLesson && currentCourse && (
                    <>
                        <div className="back-link">
                            <Link to="../.." relative="path">
                                Назад
                            </Link>
                        </div>
                        <LessonsItem
                            lesson={currentLesson}
                            currentCourseId={currentCourse.id}
                            isLessonPage={true}
                        />
                        {currentLesson.blocks.map((block, index) => {
                            const isTestBlock = block.find(
                                (elem) =>
                                    elem.type === 'TEST' ||
                                    elem.type === 'TEST_CHECKBOX',
                            );
                            const blockType = isTestBlock ? 'test' : 'other';
                            return (
                                <ContentBlock
                                    block={block}
                                    blockType={blockType}
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
