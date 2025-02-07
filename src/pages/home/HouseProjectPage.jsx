import React, {useState} from 'react';
import * as styles from './HouseProjectPage.module.css';
import HouseProjectCard from "@pages/home/houseProjectCard/HouseProjectCard";
import house1  from "../../assets/home/home_1/1.jpg";
import house2   from "../../assets/home/home_2/1.jpg";
import house3  from "../../assets/home/home_3/1_1 - Photo.jpg";
import house4  from "../../assets/home/home_4/1_1 - Photo.jpg";
import house5  from "../../assets/home/home_5/1_1 - Photo.jpg";
import house6  from "../../assets/home/home_6/1_1 - Photo.jpg";

const HouseProjectPage = () => {

    const [isFormVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className={styles.container}>
            <h1>Проект дома</h1>
            <div className={styles.cardContainer}>
                <HouseProjectCard image={house1} title="Современный коттедж" />
                <HouseProjectCard image={house2} title="Классический особняк" />
                <HouseProjectCard image={house3} title="Минималистичный дом" />
                <HouseProjectCard image={house4} title="Минималистичный дом" />
                <HouseProjectCard image={house5} title="Минималистичный дом" />
                <HouseProjectCard image={house6} title="Минималистичный дом" />
            </div>

            <button className={styles.requestButton} onClick={toggleForm}>
                Оставить заявку
            </button>

            {isFormVisible && (
                <div className={styles.formContainer}>
                    <h2>Оставьте заявку</h2>
                    <form>
                        <input type="text" placeholder="Ваше имя" required />
                        <input type="tel" placeholder="Ваш номер телефона" required />
                        <input type="email" placeholder="Ваш email" required />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            )}

        </div>
    );
};

export default HouseProjectPage;
