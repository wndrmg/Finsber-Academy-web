import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {selectCoursesSelector} from '@src/redux/reducers/courses/courses.selector';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';
import {ContentBlock} from '@components/UI/ContentBlock/ContentBlock';

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
                        {currentLesson.blocks.map((block, index) => (
                            <ContentBlock block={block} key={index} />
                        ))}
                    </>
                )}
            </div>
        </main>
    );
};
