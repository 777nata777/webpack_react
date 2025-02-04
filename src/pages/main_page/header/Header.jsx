import React from 'react';
import * as styles from "@pages/main_page/header/Header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>ARH/DIZ</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#">Дома</a></li>
                    <li><a href="#">Общественные здания</a></li>
                    <li><a href="#">Проекты застройки</a></li>
                    <li><a href="#">Интерьер</a></li>
                    <li><a href="#">Благоустройство</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;