import React from "react";
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.contactsBlock}>
                <h2>Контакты</h2>
                <form className={styles.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea>
                    </textarea>
                </form>
                <button>Отправить</button>
            </div>
        </section>
    );
};

export default Contacts;