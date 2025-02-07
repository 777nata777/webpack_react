import React from 'react';
import * as styles from "@pages/home//houseProjectCard/HouseProjectCard.module.css";


const HouseProjectCard = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default HouseProjectCard;