import React from "react";
import styles from './Work.module.css';

const Work = () => {
    return (
        <article className={styles.worksItem}>
            <div className={styles.worksHeader}>
                <button className={styles.worksBtn}>Смотреть</button>
            </div>
            <div className={styles.worksFooter}>
                <h3>Название проекта</h3>
                <p>Краткое описание</p>
            </div>
        </article>
    );
};

export default Work;