import React from 'react';
import ReactDOM from 'react-dom/client'; // Новый API для React 18
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корень
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);