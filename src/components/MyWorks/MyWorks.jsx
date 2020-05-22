import React from "react";
import styles from './MyWorks.module.css';
import Work from "./Work/Work";
import imgWork1 from '../../assets/img/work1.jpg';
import imgWork2 from '../../assets/img/work2.jpg';

const MyWorks = () => {
    const worksInfo = {
        firstTitle: '10 tips for drawing with coloured pencils',
        secondTitle: 'The single greatest gift to get your friend who always travels',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    };

    return (
        <section className={styles.works}>
            <div className={styles.container}>
                <h2>Мои работы</h2>
                <div className={styles.worksBlock}>
                    <Work
                        title={worksInfo.firstTitle}
                        desc={worksInfo.desc}
                        imgWork={imgWork1}
                    />
                    <Work
                        title={worksInfo.secondTitle}
                        desc={worksInfo.desc}
                        imgWork={imgWork2}
                    />
                </div>
            </div>
        </section>
    );
};

export default MyWorks;