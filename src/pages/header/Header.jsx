import React from 'react';
import { Link } from 'react-router-dom'; // Используем Link для маршрутизации
import * as styles from "@pages/header/Header.module.css";


const Header = () => {

    return (
        <header className={styles.header}>

            <Link to="/" className={styles.logo}>
                ARH/DIZ
                <p>aрхитектурное бюро</p>
            </Link>

            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/house-project">Дома</Link></li>
                    <li><Link to="/public-buildings">Общественные здания</Link></li>
                    <li><Link to="/construction-projects">Проекты застройки</Link></li>
                    <li><Link to="/interior">Интерьер</Link></li>
                    <li><Link to="/landscaping">Благоустройство</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;