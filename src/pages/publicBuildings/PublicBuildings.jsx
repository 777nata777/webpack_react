import React from 'react';
import * as styles from "@pages/home/HouseProjectPage.module.css";
import HouseProjectCard from "@pages/home/houseProjectCard/HouseProjectCard";
import house1 from "../../assets/publicBuildings/publicBuildings_1/Баня/1_1 - Photo.jpg";
import house2 from "../../assets/publicBuildings/publicBuildings_2/Гостиница Шевченко/2_1 - Photo.jpg";
import house3 from "../../assets/publicBuildings/publicBuildings_4/Крючок/1_1 - Photo.jpg";
import house4 from "../../assets/publicBuildings/publicBuildings_5/Магазин Чехова/1_1 - Photo.jpg";
import house5 from "../../assets/publicBuildings/publicBuildings_6/Октбярьская/1_1 - Photo.jpg";
import house6 from "../../assets/publicBuildings/publicBuildings_7/Петровская/1_1 - Photo.jpg";

const PublicBuildings = () => {
    return (
        <div className={styles.container}>
            <h1>Общественные здания</h1>
            <div className={styles.cardContainer}>
                <HouseProjectCard image={house1} title="Современный коттедж" />
                <HouseProjectCard image={house2} title="Классический особняк" />
                <HouseProjectCard image={house3} title="Минималистичный дом" />
                <HouseProjectCard image={house4} title="Эко-лофт" />
                <HouseProjectCard image={house5} title="Футуристическая вилла" />
                <HouseProjectCard image={house6} title="Скандинавский дом" />
            </div>
        </div>
    );
};

export default PublicBuildings;
