import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Header } from '@components/Header';
import { CoursePage } from '@src/pages/CoursePage';
import { Footer } from '@components/Footer';
import {UseScrollToTop} from '@src/hooks/useScrollToTop/useScrollToTop';
import {useCourses} from '@src/hooks/useCourses/useCourses';
import {MainPage} from '@src/pages/MainPage';
import {AllCoursesPage} from '@src/pages/AllCoursesPage';

import './App.scss';


export const App = () => {

    const getCourses = useCourses()
    
    return (
        <div className="App">
            <BrowserRouter>
                <UseScrollToTop />
                <Header />
                <Routes>
                    <Route path='/' element={
                        <MainPage getCourses={getCourses} />
                    } 
                    />
                    <Route path="/courses/:id" element={
                        <main>
                            <CoursePage getCourses={getCourses} />
                        </main>
                    } 
                    />
                    <Route path="/courses" element={
                        <AllCoursesPage getCourses={getCourses}/>
                    } 
                    />
                    <Route path="/*" element={ <h1>Страница не найдена</h1> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
