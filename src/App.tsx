import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Header } from './components/Header';
import { TopBanner } from './components/TopBanner';
import { CoursesList } from './components/CoursesList';
import './App.scss';

export const App = () => {
    
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <main>
                            <TopBanner />
                            <div className='main-content'>
                                <CoursesList />
                            </div>
                        </main>
                    } 
                    />
                    <Route path="courses" element={
                        <main>
                            <div className='main-content'>
                                <CoursesList />
                            </div>
                        </main>
                    } 
                    />
                    <Route path="*" element={ <h1>Страница не найдена</h1> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
