"use client"

import styles from './Contacts.module.scss';
import React from "react";

const Contacts = () => {
    return (
        <section id="contacts" className={styles.contactsSection}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.contacts}>
                        <div className={styles.contactsContent}>
                            <h2 className={styles.title}>Контакты</h2>
                            <address>
                                <a href="tel:+79150412893">+7 (915) 041-28-93</a>
                                <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer">
                                    М.О., г. Раменское, Чугунова, 21а
                                </a>
                                <div>Ежедневно 09:00-21:00</div>
                            </address>
                            <div className={styles.messengers}>
                                <hr/>
                                <div className={styles.link}>
                                    <a target="_blank" href="https://wa.me/" rel="noopener noreferrer">
                                        WhatsApp
                                    </a>
                                </div>
                                <hr/>
                                <div className={styles.link}>
                                    <a target="_blank" href="https://t.me/kleverstom" rel="noopener noreferrer">
                                        Telegram
                                    </a>
                                </div>
                                <hr/>
                            </div>
                            <button className={styles.contactBtn}>
                                Записаться на консультацию
                            </button>
                        </div>
                    </div>
                    <div className={styles.photo}>
                        <img src="/common.jpg" alt="Стоматологическая клиника" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;