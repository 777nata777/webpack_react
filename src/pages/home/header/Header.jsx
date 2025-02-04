import React from 'react';
import * as styles from "@pages/home/Home.module.css";
import {motion} from "framer-motion";

const menuItems = [
    "Дома",
    "Общественные здания",
    "Проекты застройки",
    "Интерьер",
    "Благоустройство",
    "Контакты",
];

const Header = () => {
    return (
        <div>
            <motion.nav className={styles.sidebar}>
                <h1>ARH/DIZ</h1>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
};

export default Header;