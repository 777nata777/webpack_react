import React, {Suspense, useState} from 'react';
import './App.scss';
import * as styles from './App.module.scss';
import {Link, Route, Routes} from "react-router-dom";

// Лениво загружаем страницы (Lazy loading)
const Home = React.lazy(() => import('@pages/home/Home'));
const About = React.lazy(() => import('@pages/about/About'));
const NotFound = React.lazy(() => import('@pages/notfound/NotFound'));

const App = () => {
    return (
        <div>
            {/* Оборачиваем все маршруты в Suspense для загрузки */}
            <Suspense fallback={<h2>⏳ Загрузка...</h2>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;