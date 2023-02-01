import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {CoursesState} from '@src/redux/reducers/courses/courses.model';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';
import {ContentBlock} from '@components/UI/ContentBlock/ContentBlock';

interface LessonPageProps {
    coursesData: CoursesState;
}

export const LessonPage = ({coursesData}: LessonPageProps) => {
    const {courses, error, loading} = coursesData;
    const urlParams = useParams();
    const currentCourse = courses.find(
        (course) => course.id === urlParams.courseId,
    );
    const currentLesson = currentCourse?.lessons.find(
        (lesson) => lesson.id === urlParams.lessonId,
    );
    //console.log(currentLesson?.blocks);
    return (
        <main>
            <div className="main-content main-content-lesson">
                {loading && <div className="loader"></div>}
                {error && <div className="error">{error}</div>}
                {currentLesson && currentCourse ? (
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
                ) : (
                    <div className="error">Урок не найден</div>
                )}
            </div>
        </main>
    );
};
