import React from "react";
import styles from './MySkills.module.css';
import Skill from "./Skill/Skill";

const MySkills = () => {
    return (
        <section className={styles.skills}>
            <div className={'container'}>
                <div className={styles.skillsBlock}>
                    <h2>Мои скиллы</h2>
                    <div className={styles.skillsList}>
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;