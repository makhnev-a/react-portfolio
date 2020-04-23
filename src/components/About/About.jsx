import React from "react";
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.aboutText}>
                    <span>Привет!</span>
                    <span>Меня зовут Иван Иванович.</span>
                    <span>Я front-end разработчик</span>
                </div>
                <div className={styles.aboutPhoto}>
                    <img src="" alt="Картинка обо мне"/>
                </div>
            </div>
        </section>
    );
};

export default About;