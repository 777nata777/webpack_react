import React from 'react';
import house1 from "../../assets/construction_projects/construction_projects_1/База застройка/1_22 - Photo.jpg";
import HouseProjectCard from "@pages/home/houseProjectCard/HouseProjectCard";
import * as styles from "@pages/home/HouseProjectPage.module.css";
import house2 from "../../assets/construction_projects/construction_projects_2/Галицкого/12_1 - Photo.jpg";
import house3 from "../../assets/construction_projects/construction_projects_3/Геленджик/1_1 - Photo.jpg";
import house4 from "../../assets/construction_projects/construction_projects_4/Застройка Мариуполь/1_2 - Photo.jpg";
import house5 from "../../assets/construction_projects/construction_projects_5/Кабардинка 2/1_1 - Photo.jpg";

const Landscaping = () => {
    return (
            <div className={styles.container}>
                <h1>Благоустройство</h1>
                <div className={styles.cardContainer}>
                    <HouseProjectCard image={house1} title="Современный коттедж" />
                    <HouseProjectCard image={house2} title="Классический особняк" />
                    <HouseProjectCard image={house3} title="Минималистичный дом" />
                    <HouseProjectCard image={house4} title="Эко-лофт" />
                    <HouseProjectCard image={house5} title="Футуристическая вилла" />

                </div>
            </div>
    );
};

export default Landscaping;
