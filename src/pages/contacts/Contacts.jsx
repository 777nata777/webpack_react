import React from 'react';
import * as styles from './Contacts.module.css';
import { FaInstagram, FaTelegramPlane, FaWhatsapp  } from 'react-icons/fa';
import yandexBusinessLogo from '../../assets/contacts/Я_Бизнес_Лого_976_✕_192-1.png'
import phoneIcon from '../../assets/contacts/icons8-телефон-50.png'
import locationIcon from '../../assets/contacts/icons8-map-marker-50.png'


const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <h1>Контакты</h1>

            {/* Адрес */}
            <p>
                <img src={locationIcon} alt="Адрес" className={styles.smallIcon} />
                Ростовская область, г. Таганрог, ул. Капитана Кравцова, 2
            </p>

            {/* Телефон */}
            <p>
                <img src={phoneIcon} alt="Телефон" className={styles.smallIcon} />
                Телефон: <a href="tel:+79043468029">+7 (904) 346-80-29</a>
            </p>

            {/* Социальные сети */}
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/arh.diz?igsh=cGFtcGd4cDNzb2Iz"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FaInstagram className={styles.icon} /> Instagram
                </a>

                <a href="https://t.me/arch_design_tgn"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FaTelegramPlane className={styles.icon} /> Telegram
                </a>

                <a href="https://wa.me/79043468029"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FaWhatsapp className={styles.icon} /> WhatsApp
                </a>

                <a href="https://arhdiz.clients.site/?fbclid=PAY2xjawIStINleHRuA2FlbQIxMQABprncIRdTlf5Ha9vSqpsfuO_DrrR-WyshEQO_ZqUrF68QObJ9qybyh3hIPw_aem_iHsmU6d0THh9vGmLZlmSCw"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <img src={yandexBusinessLogo} alt="Яндекс Бизнес" className={styles.largeIcon} />
                    Яндекс Бизнес
                </a>
            </div>

            {/* Карта */}
            <p>
                <a href="https://yandex.ru/maps/?text=Ростовская+область,+Таганрог,+Капитана+Кравцова+2"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src="https://static-maps.yandex.ru/1.x/?ll=38.916800,47.237750&size=300,200&z=16&l=map&pt=38.916800,47.237750,pm2rdm"
                         alt="Карта расположения"
                         className={styles.mapImage} />
                </a>
            </p>
        </div>
    );
};

export default Contacts;
