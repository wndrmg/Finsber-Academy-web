import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import './App.scss';
import { Header } from '@components/Header';
import { PageHero } from '@components/PageHero';
import { CoursesList } from '@components/CoursesList';
import { CoursePage } from '@components/CoursePage';
import { Footer } from '@components/Footer';
import {ScrollToTop} from '@src/hooks/ScrollToTop/ScrollToTop';


export const App = () => {
    
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path='/' element={
                        <main>
                            <PageHero />
                            <div className='main-content'>
                                <CoursesList />
                            </div>
                        </main>
                    } 
                    />
                    <Route path="/courses/:id" element={
                        <main>
                            <CoursePage />
                        </main>
                    } 
                    />
                    <Route path="/courses" element={
                        <main>
                            <div className='main-content'>
                                <CoursesList />
                            </div>
                        </main>
                    } 
                    />
                    <Route path="/*" element={ <h1>Страница не найдена</h1> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
