import React from "react";
import styles from './Header.module.css';
import logo from './../../logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNavigation + ' container'}>
                <a href={'/'} className={styles.headerLogo}>
                    <img src={logo} alt="Логотип"/>
                </a>
                <ul className={styles.headerLinks}>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href={'/skills'}>Скиллы</a>
                    </li>
                    <li>
                        <a href={'/works'}>Работы</a>
                    </li>
                    <li>
                        <a href={'/contacts'}>Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;