import React from "react";
import styles from './MyWorks.module.css';
import Work from "./Work/Work";

const MyWorks = () => {
    return (
        <section className={styles.works}>
            <div className={'container'}>
                <div className={styles.worksBlock}>
                    <h2>Мои работы</h2>
                    <div className={styles.worksList}>
                        <Work/>
                        <Work/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWorks;