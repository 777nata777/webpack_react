import React from 'react';
import ReactDOM from 'react-dom/client'; // Новый API для React 18
import App from './components/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корень
root.render(
    <React.StrictMode>
        <BrowserRouter>  {/* Оборачиваем приложение */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);