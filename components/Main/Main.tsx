"use client"

import styles from './Main.module.scss';
import React from "react";
import Hero from "@/components/Main/Hero/Hero";
import Services from "@/components/Main/Services/Services";
import Contacts from "@/components/Main/Contacts/Contacts";
import AppointmentForm from "@/components/Main/AppointmentForm/AppointmentForm";

const Main = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <Services />
            <section id="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutImage}>
                            <img src="/founder.jpg" alt="Основатель клиники" />
                        </div>
                        <div className={styles.aboutText}>
                            <h2 className={styles.aboutTitle}>Здравствуйте, уважаемые гости!</h2>
                            <div className={styles.aboutDescription}>
                                <p>Я Александр Жаров, врач-стоматолог. Уже 20 лет я занимаюсь делом жизни.</p>
                                <p>За это время собраны колоссальный опыт эффективной стоматологической помощи и тысячи отзывов от пациентов, которым мы вернули уверенную здоровую улыбку.</p>
                                <p>В 2017 году мы создали TopSmile как территорию безопасной, надежной и современной стоматологической помощи для детей и взрослых.</p>
                                <p>Главный приоритет клиники — персональное взаимодействие с каждым гостем, прозрачные и честные партнерские отношения. Наша гордость — это команда врачей экспертного уровня, обеспечивающая решение задач любой сложности, а также команда заботы и сервиса, главная задача которой — обеспечить вам комфортный, легкий, «бесшовный» путь лечения в TopSmile. Наш главный актив — вы.</p>
                                <p>И мы сделаем все, чтобы ваш выбор всегда вызывал добрую и довольную улыбку.</p>
                                <p>Выбор клиники TopSmile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppointmentForm />
            <Contacts />
        </main>
    );
};

export default Main;