import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import *as styles from "./Home.module.css"; // ✅ Используем CSS-модули

import img1 from "../../assets/home/1.jpg";
import img2 from "../../assets/home/2.jpg";
import img3 from "../../assets/home/3.jpg";

import "swiper/css";
import "swiper/css/navigation";

const images = [img1, img2, img3];

const menuItems = [
    "Дома",
    "Общественные здания",
    "Проекты застройки",
    "Интерьер",
    "Благоустройство",
    "Контакты",
];

const Home = () => {
    return (
        <div className={styles.container}>
            {/* Левое меню */}
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

            {/* Слайдер */}
            <Swiper
                className={styles.slider}
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                loop
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;