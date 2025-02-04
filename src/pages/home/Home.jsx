import React from "react";
import * as styles from "./Home.module.css";
import Header from "@pages/home/header/Header";
import Slider from "@pages/home/slider/Sliders";

import img1 from '../../assets/home/1.jpg';
import img2 from '../../assets/home/2.jpg';
import img3 from '../../assets/home/3.jpg';
import img4 from '../../assets/home/4.jpg';
import img5 from '../../assets/home/5.jpg';
import img6 from '../../assets/home/6.jpg';
import img7 from '../../assets/home/7.jpg';
import img8 from '../../assets/home/8.jpg';
import img9 from '../../assets/home/9.jpg';
import img10 from '../../assets/home/10.jpg';
import img11 from '../../assets/home/11.jpg';
import img12 from '../../assets/home/12.jpg';
import img13 from '../../assets/home/13.jpg';


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const Home = () => {
    return (
        <div className={styles.container}>
            {/* Левое меню */}
            <Header></Header>

            {/* Слайдер */}
            <Slider images={images} />

        </div>
    );
};

export default Home;