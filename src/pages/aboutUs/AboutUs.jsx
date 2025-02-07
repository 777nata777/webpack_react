import React from 'react';
import * as styles from './AboutUs.module.css'; // Импортируем стили как объект

import TeamMember1 from '../../assets/about-us/87f483cbc859bdfa73fae4b540288b18.jpg';
import TeamMember2 from '../../assets/about-us/Animals_Birds_Owlet_on_a_branch_031269_.jpg';
import TeamMember3 from '../../assets/about-us/ad0709635b42e822c7aa6ee581776d78.jpg';
import TeamMember4 from '../../assets/about-us/cat-animals-wildlife-fur-baby-animals-whiskers-leopard-Ocelot-savannah-feline-wild-cat-fauna-mammal-1920x1080-px-cat-like-mammal-snout-small-to-medium-sized-cats-carnivoran-organism-bengal-terrestrial-anima.jpg';
import TeamMember from "@pages/aboutUs/TeamMember";

const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>

            <h1>Наша команда</h1>

            <section className={styles.team}>

                <TeamMember
                    name="Член команды 1"
                    position="CEO"
                    imageSrc={TeamMember1}
                    alt="Член команды 1"
                />
                <TeamMember
                    name="Член команды 2"
                    position="CTO"
                    imageSrc={TeamMember2}
                    alt="Член команды 2"
                />
                <TeamMember
                    name="Член команды 3"
                    position="Дизайнер"
                    imageSrc={TeamMember3}
                    alt="Член команды 3"
                />
                <TeamMember
                    name="Член команды 4"
                    position="Разработчик"
                    imageSrc={TeamMember4}
                    alt="Член команды 4"
                />

            </section>

            <section className={styles.office}>
                <h2>Наш офис</h2>
                <div className={styles.officePhoto}>
                    <img src="/path/to/office1.jpg" alt="Офис 1" />
                </div>
                <div className={styles.officePhoto}>
                    <img src="/path/to/office2.jpg" alt="Офис 2" />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
