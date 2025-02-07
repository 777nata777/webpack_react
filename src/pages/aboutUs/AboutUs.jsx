import React from 'react';
import * as styles from './AboutUs.module.css'; // Импортируем стили как объект

import TeamMember1 from '../../assets/about-us/87f483cbc859bdfa73fae4b540288b18.jpg';
import TeamMember2 from '../../assets/about-us/Animals_Birds_Owlet_on_a_branch_031269_.jpg';
import TeamMember3 from '../../assets/about-us/ad0709635b42e822c7aa6ee581776d78.jpg';
import TeamMember4 from '../../assets/about-us/cat-animals-wildlife-fur-baby-animals-whiskers-leopard-Ocelot-savannah-feline-wild-cat-fauna-mammal-1920x1080-px-cat-like-mammal-snout-small-to-medium-sized-cats-carnivoran-organism-bengal-terrestrial-anima.jpg';
import TeamMember from "@pages/aboutUs/TeamMember";

import ofise1  from '../../assets/about-us/87f483cbc859bdfa73fae4b540288b18.jpg';
import ofise2  from '../../assets/about-us/87f483cbc859bdfa73fae4b540288b18.jpg';
const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>

            <h1>Наша команда</h1>

            <section className={styles.team}>

                <TeamMember
                    name="Максим Александрович"
                    position="Архитектор"
                    imageSrc={TeamMember1}
                    alt="Член команды 1"
                />
                <TeamMember
                    name="Наталья Владимировна"
                    position="Архитектор"
                    imageSrc={TeamMember2}
                    alt="Член команды 2"
                />
                <TeamMember
                    name="Мария Николаевна"
                    position="Архитектор"
                    imageSrc={TeamMember3}
                    alt="Член команды 3"
                />
                <TeamMember
                    name="Алексей Викторович"
                    position="Дизайнер"
                    imageSrc={TeamMember4}
                    alt="Член команды 4"
                />

            </section>

            <section className={styles.office}>
                <h2>Наш офис</h2>
                <div className={styles.officePhoto}>
                    <img src={ofise1} alt="Офис 1" />
                    <img src={ofise1} alt="Офис 1" />
                </div>
                <div className={styles.officePhoto}>
                    <img src={ofise2} alt="Офис 2" />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
