"use client"

import styles from './Main.module.scss';
import React from "react";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.contacts}>
                    <div className={styles.contactsContent}>
                        <address>
                            <a href="tel:+79150412893">+7 (915) 041-28-93</a>
                            <br/>
                            <a href="#">М.О., г. Раменское, Чугунова, 21а</a>
                            <div>Ежедневно 09:00-21:00</div>
                        </address>
                        <div className={styles.messengers}>
                            <hr/>
                            <div className={styles.link}>
                                <a className="btn btn_md" target="_blank" href="https://wa.me/">
                                    WhatsApp <i className="icon icon_md icon_deg45"></i>
                                </a>
                            </div>
                            <hr/>
                            <div className={styles.link}>
                                <a className="btn btn_md" target="_blank" href="https://t.me/kleverstom">
                                    Telegram <i className="icon icon_md icon_deg45"></i>
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
                <img src="/common.jpg" width={850}/>
                </div>
            </div>
        </div>
    );
};

export default Main;