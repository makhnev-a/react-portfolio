import React from "react";
import styles from './MySkills.module.css';
import Skill from "./Skill/Skill";

const MySkills = () => {
    const skillsData = [
        {
            id: 1,
            title: 'React',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
        },
        {
            id: 1,
            title: 'JS',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
        },
        {
            id: 1,
            title: 'HTML&CSS',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
        }
    ];

    return (
        <section className={styles.skills}>
            <div className={styles.container}>
                <h2>Мои скиллы</h2>
                <div className={styles.skillsBlock}>
                    {
                        skillsData.map((item) => (
                            <Skill
                                title={item.title}
                                desc={item.desc}
                                key={item.id}
                            />
                        ))
                    }
                    {/*<Skill/>*/}
                    {/*<Skill/>*/}
                    {/*<Skill/>*/}
                </div>
            </div>
        </section>
    );
};

export default MySkills;