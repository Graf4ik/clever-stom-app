"use client"

import React, { useState } from 'react';
import styles from './AppointmentForm.module.scss';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Форма отправлена:', formData);
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="appointment" className={styles.appointment}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>Запишитесь на прием</h2>
                        <p className={styles.subtitle}>
                            Оставьте свои контакты, мы свяжемся с вами в ближайшее время
                        </p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                placeholder="Сообщение (необязательно)"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={styles.textarea}
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Записаться
                        </button>
                        <p className={styles.privacy}>
                            Нажимая на кнопку, я подтверждаю, что ознакомлен с условиями
                            Политики конфиденциальности и даю свое согласие на обработку персональных данных
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;


