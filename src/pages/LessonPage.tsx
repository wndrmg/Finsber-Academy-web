import React from 'react';
import {useParams} from 'react-router-dom';

import {CoursesState, IBlock} from '@src/redux/reducers/courses/courses.model';

import {LessonsItem} from '@components/shared/LessonsList/LessonsItem/LessonsItem';

interface LessonPageProps {
    coursesData: CoursesState;
}
interface BlockElementProps {
    elem: IBlock;
    key: number;
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
    const BlockElement = ({elem}: BlockElementProps) => {
        if (elem.type === 'LI') return <li>{elem.text}</li>;
        if (elem.type === 'TEXT') return <p>{elem.text}</p>;
        if (elem.type === 'H1') return <h2>{elem.text}</h2>;
        if (elem.type === 'H2') return <h3>{elem.text}</h3>;
        if (elem.type === 'LINK')
            return (
                <a href={elem.url} target="_blank" rel="noreferrer">
                    <h4>{elem.title}</h4>
                    <img src="https://via.placeholder.com/80" alt="promo" />
                    <p>{elem.text}</p>
                </a>
            );
        if (elem.type === 'TEST')
            return (
                <>
                    <input
                        name="test"
                        type="checkbox"
                        value={`${elem.isTestTrue}`}
                    />
                    <label htmlFor="test">{elem.text}</label>
                </>
            );
        return null;
    };

    console.log(currentLesson);
    return (
        <main>
            <div className="main-content">
                {loading && <div className="loader"></div>}
                {error && <div className="error">{error}</div>}
                {currentLesson && currentCourse ? (
                    <>
                        <LessonsItem
                            lesson={currentLesson}
                            currentCourseId={currentCourse.id}
                        />
                        <h1>{currentLesson.title}</h1>
                        {currentLesson.blocks.map((block) =>
                            block.map((elem, index) => (
                                <BlockElement
                                    elem={elem}
                                    key={index}
                                ></BlockElement>
                            )),
                        )}
                    </>
                ) : (
                    <div className="error">Урок не найден</div>
                )}
            </div>
        </main>
    );
};
