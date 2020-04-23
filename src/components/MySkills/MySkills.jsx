import React from "react";
import styles from './MySkills.module.css';
import Skill from "./Skill/Skill";

const MySkills = () => {
    return (
        <section className={styles.skills}>
            <div className={styles.container}>
                <h2>Мои скиллы</h2>
                <div className={styles.skillsBlock}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </section>
    );
};

export default MySkills;