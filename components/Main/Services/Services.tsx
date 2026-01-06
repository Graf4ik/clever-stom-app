"use client"

import React from 'react';
import styles from './Services.module.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Имплантация',
    description: 'Современная имплантация зубов с использованием лучших систем',
    icon: '🦷'
  },
  {
    id: 2,
    title: 'Протезирование',
    description: 'Коронки, мосты, виниры и другие виды протезирования',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Ортодонтия',
    description: 'Исправление прикуса брекетами и элайнерами',
    icon: '😊'
  },
  {
    id: 4,
    title: 'Эстетическая стоматология',
    description: 'Отбеливание, виниры, художественная реставрация',
    icon: '💎'
  },
  {
    id: 5,
    title: 'Детская стоматология',
    description: 'Безопасное лечение зубов для детей',
    icon: '👶'
  },
  {
    id: 6,
    title: 'Терапия',
    description: 'Лечение кариеса, пульпита и других заболеваний',
    icon: '🔬'
  }
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Наши услуги</h2>
                <p className={styles.sectionSubtitle}>
                    Полный спектр стоматологических услуг для всей семьи
                </p>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <button className={styles.cardButton}>
                                Подробнее →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


