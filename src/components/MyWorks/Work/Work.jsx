import React from "react";
import styles from './Work.module.css';

const Work = (props) => {
    return (
        <article className={styles.worksItem}>
            <div className={styles.worksHeader}>
                <img src={props.imgWork} alt="Картинка работ"/>
            </div>
            <div className={styles.worksFooter}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </article>
    );
};

export default Work;