import React from "react";
import * as styles from "./MainPage.module.css";
import Slider from "@pages/mainPage/slider/Sliders";

import img1 from '../../assets/slider_main_page/1.jpg';
import img2 from '../../assets/slider_main_page/2.jpg';
import img3 from '../../assets/slider_main_page/3.jpg';
import img4 from '../../assets/slider_main_page/4.jpg';
import img5 from '../../assets/slider_main_page/5.jpg';
import img6 from '../../assets/slider_main_page/6.jpg';
import img7 from '../../assets/slider_main_page/7.jpg';
import img8 from '../../assets/slider_main_page/8.jpg';
import img9 from '../../assets/slider_main_page/9.jpg';
import img10 from '../../assets/slider_main_page/10.jpg';
import img11 from '../../assets/slider_main_page/11.jpg';
import img12 from '../../assets/slider_main_page/12.jpg';
import img13 from '../../assets/slider_main_page/13.jpg';



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const MainPage = () => {
    return (
        <div className={styles.container}>
            <Slider images={images} />
        </div>
    );};

export default MainPage;