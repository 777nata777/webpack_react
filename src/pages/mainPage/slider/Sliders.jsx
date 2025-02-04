import React, {useEffect, useState} from 'react';
import * as styles from "./Sliders.module.css";

const Slider = ({ images, interval = 3000 }) => {
    // Храним индекс текущего слайда
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция перехода к предыдущему слайду
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Функция перехода к следующему слайду
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Автоматическое переключение слайдов
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, interval);

        return () => clearInterval(slideInterval); // Очистка интервала при размонтировании компонента
    }, [currentIndex, interval]);

    return (
        <div className={styles.sliderContainer}>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className={styles.image}
            />
            <div className={styles.controls}>
                <button className={`${styles.button} ${styles.prevButton}`} onClick={prevSlide}>❮</button>
                <span className={styles.text}>{`${currentIndex + 1}/${images.length}`}</span>
                <button className={`${styles.button} ${styles.nextButton}`} onClick={nextSlide}>❯</button>
            </div>
        </div>

    );
};


export default Slider;