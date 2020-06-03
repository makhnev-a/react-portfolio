import React from "react";
import styles from './Skill.module.css';

const Skill = (props) => {
    return (
        <article className={styles.skillsItem}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            {/*<div className={styles.skillsItemHeader}>*/}
            {/*    <div className={styles.skillsItemImg}>*/}
            {/*        <img src="" alt="Картинка навыка"/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.skillsItemHeading}>{props.title}</h3>*/}
            {/*</div>*/}
            {/*<div className={styles.skillsItemFooter}>*/}
            {/*    <p>{props.desc}</p>*/}
            {/*</div>*/}
        </article>
    );
};

export default Skill;