import React, {Suspense} from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";

// Лениво загружаем страницы (Lazy loading)
const Home = React.lazy(() => import('@pages/home/Home'));


const App = () => {
    return (
        <div>
            {/* Оборачиваем все маршруты в Suspense для загрузки */}
            <Suspense fallback={<h2>⏳ Загрузка...</h2>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;