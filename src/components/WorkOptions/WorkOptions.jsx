import React from "react";
import styles from './WorkOptions.module.css';

const WorkOptions = () => {
    return (
        <section className={styles.workOptions}>
            <div className={'container'}>
                <div className={styles.workOptionsBlock}>
                    <h2>Рассматриваю варианты удаленной работы</h2>
                    <button>Нанять меня</button>
                </div>
            </div>
        </section>
    );
};

export default WorkOptions;