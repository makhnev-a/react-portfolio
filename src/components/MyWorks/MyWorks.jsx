import React from "react";
import styles from './MyWorks.module.css';
import Work from "./Work/Work";

const MyWorks = () => {
    return (
        <section className={styles.works}>
            <div className={styles.container}>
                <h2>Мои работы</h2>
                <div className={styles.worksBlock}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </section>
    );
};

export default MyWorks;