import React from "react";
import styles from './Skill.module.css';

const Skill = () => {
    return (
        <article className={styles.skillsItem}>
            <div className={styles.skillsItemHeader}>
                <img className={styles.skillsItemImg} src="" alt="Картинка навыка"/>
                <h3 className={styles.skillsItemHeading}>React</h3>
            </div>
            <div className={styles.skillsItemFooter}>
                <p>Подробное описание навыка</p>
            </div>
        </article>
    );
};

export default Skill;