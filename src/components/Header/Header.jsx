import React from "react";
import styles from './Header.module.css';
import logo from './../../logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Скиллы</a></li>
                    <li><a href="#">Работы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;