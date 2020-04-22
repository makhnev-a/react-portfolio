import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={'container'}>
                <div className={styles.footerBlock}>
                    <p className={styles.footerCopy}>Иван Иванов</p>
                    <ul className={styles.footerList}>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                    <p className={styles.footerCopy}>© 2019 Все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;