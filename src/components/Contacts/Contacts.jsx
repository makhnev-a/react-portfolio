import React from "react";
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={'container'}>
                <div className={styles.contactsBlock}>
                    <h2>Контакты</h2>
                    <form className={styles.contactsForm}>
                        <input type="text" placeholder={'Первый инпунт'}/>
                        <br/>
                        <input type="text" placeholder={'Второй инпут'}/>
                        <br/>
                        <textarea placeholder={'Введите в поле текст'}>
                        </textarea>
                    </form>
                    <button>Отправить</button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;