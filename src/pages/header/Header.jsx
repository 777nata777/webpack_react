import React from 'react';
import {Link, useLocation} from 'react-router-dom'; // Используем Link для маршрутизации
import * as styles from "@pages/header/Header.module.css";
import logoWhite from '@assets/logo/logo_white.jpg';
import logoBlack from '@assets/logo/logo_black.jpg';



const Header = () => {

    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <header className={`${styles.header} ${isMainPage ? styles.transparent : styles.black}`}>

            <Link to="/" className={styles.logo}>
                <img
                    src={isMainPage ? logoWhite : logoBlack}
                    alt="Логотип ARH/DIZ"
                    className={styles.logoImage} />

            </Link>

            <nav>
                <ul className={styles.navList}>

                    <li><Link to="/house-project" className={location.pathname === "/house-project" ? styles.activeLink : ""}>Дома</Link></li>
                    <li><Link to="/public-buildings" className={location.pathname === "/public-buildings" ? styles.activeLink : ""}>Общественные здания</Link></li>
                    <li><Link to="/construction-projects" className={location.pathname === "/construction-projects" ? styles.activeLink : ""}>Проекты застройки</Link></li>
                    <li><Link to="/interior" className={location.pathname === "/interior" ? styles.activeLink : ""}>Интерьер</Link></li>
                    <li><Link to="/landscaping" className={location.pathname === "/landscaping" ? styles.activeLink : ""}>Благоустройство</Link></li>
                    <li><Link to="/about-us" className={location.pathname === "/about-us" ? styles.activeLink : ""}>О нас</Link></li>
                    <li><Link to="/contacts" className={location.pathname === "/contacts" ? styles.activeLink : ""}>Контакты</Link></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;