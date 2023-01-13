import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Outlet
} from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header';
import { PageHero } from './components/PageHero';
import { CoursesList } from './components/CoursesList';
import { CourseItem } from './components/CourseItem';
import { Footer } from './components/Footer';

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

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
                    <Route path="/courses/item" element={
                        <main>
                            <CourseItem />
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
