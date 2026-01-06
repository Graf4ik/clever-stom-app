"use client"

import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Стоматология <span className={styles.highlight}>Клевер</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Современная стоматология для всей семьи. 
                        Экспертный уровень лечения с заботой о каждом пациенте.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryBtn}>
                            Записаться на прием
                        </button>
                        <button className={styles.secondaryBtn}>
                            Узнать цены
                        </button>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>✓</span>
                            <span>Без боли</span>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>✓</span>
                            <span>Гарантия качества</span>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>✓</span>
                            <span>Рассрочка</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


