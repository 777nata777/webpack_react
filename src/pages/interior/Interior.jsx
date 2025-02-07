import React from 'react';
import * as styles from "@pages/home/HouseProjectPage.module.css";
import HouseProjectCard from "@pages/home/houseProjectCard/HouseProjectCard";
import house1 from "../../assets/interior/Колхоз/2_1 - Photo.jpg";
import house2 from "../../assets/interior/крючек/4_1 - Photo.jpg";
import house3 from "../../assets/interior/Новая_папка/1_1 - Photo.jpg";


const Interior = () => {
    return (
        <div className={styles.container}>
            <h1>Интерьер</h1>
            <div className={styles.cardContainer}>
                <HouseProjectCard image={house1} title="Современный коттедж" />
                <HouseProjectCard image={house2} title="Классический особняк" />
                <HouseProjectCard image={house3} title="Минималистичный дом" />
            </div>
        </div>
    );
};

export default Interior;
