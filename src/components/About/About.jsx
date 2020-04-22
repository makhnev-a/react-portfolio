import React from "react";
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={'container'}>
                <div className={styles.aboutInfo}>
                    <div className={styles.aboutInfoText}>
                        <p>Привет!<br/>Меня зовут Иван Иванович.<br/>Я front-end разработчик</p>
                    </div>
                    <div className={styles.aboutInfoImg}>
                        <img src="" alt="Картинка обо мне"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;