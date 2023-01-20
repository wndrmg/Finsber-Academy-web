import './App.scss';

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {useCourses} from '@src/hooks/useCourses/useCourses';
import {UseScrollToTop} from '@src/hooks/useScrollToTop/useScrollToTop';
import {AllCoursesPage} from '@src/pages/AllCoursesPage';
import {CoursePage} from '@src/pages/CoursePage';
import {MainPage} from '@src/pages/MainPage';

import {Footer} from '@components/Footer';
import {Header} from '@components/Header';

export const App = () => {
    const getCourses = useCourses();

    return (
        <div className="App">
            <BrowserRouter>
                <UseScrollToTop />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage getCourses={getCourses} />}
                    />
                    <Route
                        path="/courses/:id"
                        element={
                            <main>
                                <CoursePage getCourses={getCourses} />
                            </main>
                        }
                    />
                    <Route
                        path="/courses"
                        element={<AllCoursesPage getCourses={getCourses} />}
                    />
                    <Route path="/*" element={<h1>Страница не найдена</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
