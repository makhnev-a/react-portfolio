import React from "react";
import styles from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faVk} from "@fortawesome/free-brands-svg-icons";
import {faCircle, faSpinner} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBlock}>
                <p className={styles.footerCopy}>Иван Иванов</p>
                <ul className={styles.footerList}>
                    <li>
                        <FontAwesomeIcon icon={faVk} size={"3x"} mask={faCircle}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFacebook} size={"3x"} mask={faCircle}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} size={"3x"} mask={faCircle}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTwitter} size={"3x"} mask={faCircle}/>
                    </li>
                </ul>
                <p className={styles.footerCopy}>© 2019 Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;