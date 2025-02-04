import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from '../pages/header/Header'; // Подключаем Header
import HouseProjectPage from '@pages/home/HouseProjectPage'; // Страница с проектом дома
import PublicBuildings from '../pages/publicBuildings/PublicBuildings'; // Страница общественных зданий
import ConstructionProjects from '../pages/constructionProjects/ConstructionProjects'; // Страница проектов застройки
import Interior from '../pages/interior/Interior'; // Страница интерьера
import Landscaping from '../pages/landscaping/Landscaping'; // Страница благоустройства
import Contacts from '../pages/contacts/Contacts'; // Страница контактов
import MainPage from '../pages/mainPage/MainPage'; // Главная страница

const App = () => {
    return (
        <>
            <Header /> {/* Показываем Header на каждой странице */}
            <Routes>
                <Route path="/" element={<MainPage />} /> {/* Главная страница */}
                <Route path="/house-project" element={<HouseProjectPage />} /> {/* Страница с проектом дома */}
                <Route path="/public-buildings" element={<PublicBuildings />} /> {/* Страница общественных зданий */}
                <Route path="/construction-projects" element={<ConstructionProjects />} /> {/* Страница проектов застройки */}
                <Route path="/interior" element={<Interior />} /> {/* Страница интерьера */}
                <Route path="/landscaping" element={<Landscaping />} /> {/* Страница благоустройства */}
                <Route path="/contacts" element={<Contacts />} /> {/* Страница контактов */}
            </Routes>
        </>
    );
};

export default App;
