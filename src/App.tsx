import './App.scss';

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {useCourses} from '@src/hooks/useCourses/useCourses';
import {UseScrollToTop} from '@src/hooks/useScrollToTop/useScrollToTop';
import {AllCoursesPage} from '@src/pages/AllCoursesPage';
import {CoursePage} from '@src/pages/CoursePage';
import {LessonPage} from '@src/pages/LessonPage';
import {MainPage} from '@src/pages/MainPage';

import {Footer} from '@components/shared/Footer/Footer';
import {Header} from '@components/shared/Header/Header';

export const App = () => {
    const {error, loading} = useCourses();
    return (
        <div className="App">
            {loading && <div className="loader"></div>}
            {error && <div className="error">{error}</div>}
            <BrowserRouter>
                <UseScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/courses/:courseId/lessons/:lessonId"
                        element={<LessonPage />}
                    />
                    <Route path="/courses/:courseId" element={<CoursePage />} />
                    <Route path="/courses" element={<AllCoursesPage />} />
                    <Route
                        path="/*"
                        element={
                            <div className="error">Страница не найдена</div>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
