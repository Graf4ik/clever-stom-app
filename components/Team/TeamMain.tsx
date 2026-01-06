"use client";

import React from "react";
import styles from "./TeamMain.module.scss";

type Doctor = {
  id: number;
  name: string;
  role: string;
  experience: string;
  tags: string[];
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Александр Жаров",
    role: "Врач-стоматолог, имплантолог",
    experience: "Стаж более 20 лет",
    tags: ["Имплантация", "Сложное протезирование"],
  },
  {
    id: 2,
    name: "Мария Иванова",
    role: "Врач-ортопед",
    experience: "Стаж 12 лет",
    tags: ["Коронки и виниры", "Эстетическая стоматология"],
  },
  {
    id: 3,
    name: "Кирилл Петров",
    role: "Врач-ортодонт",
    experience: "Стаж 10 лет",
    tags: ["Брекет-системы", "Элайнеры"],
  },
  {
    id: 4,
    name: "Анна Смирнова",
    role: "Врач-терапевт",
    experience: "Стаж 8 лет",
    tags: ["Лечение кариеса", "Эндодонтия под микроскопом"],
  },
  {
    id: 5,
    name: "Ольга Кузнецова",
    role: "Детский стоматолог",
    experience: "Стаж 7 лет",
    tags: ["Детская стоматология", "Адаптация детей"],
  },
  {
    id: 6,
    name: "Дмитрий Соколов",
    role: "Хирург-стоматолог",
    experience: "Стаж 15 лет",
    tags: ["Удаление зубов", "Хирургия и остеопластика"],
  },
];

const TeamMain: React.FC = () => {
  return (
    <main className={styles.team}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Команда клиники «Клевер»</h1>
          <p className={styles.subtitle}>
            Как и в TopSmile, в нашей клинике работает сильная междисциплинарная команда:
            имплантологи, ортопеды, ортодонты, терапевты, хирурги и детские стоматологи. Мы
            объединяем опыт, чтобы решать сложные клинические задачи и создавать прогнозируемый
            результат лечения.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {doctors.map((doctor) => (
              <article key={doctor.id} className={styles.card}>
                <div className={styles.avatarPlaceholder}>
                  <span>{doctor.name[0]}</span>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.name}>{doctor.name}</h2>
                  <p className={styles.role}>{doctor.role}</p>
                  <p className={styles.experience}>{doctor.experience}</p>
                  <div className={styles.tags}>
                    {doctor.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={styles.cardButton}>
                    Записаться к врачу
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoText}>
              <h2 className={styles.sectionTitle}>Мы верим в командный подход</h2>
              <p>
                Сложные клинические случаи мы обсуждаем на внутренних консилиумах — это позволяет
                учитывать опыт сразу нескольких специалистов и находить оптимальное решение для
                каждого пациента.
              </p>
              <p>
                Такой формат работы помогает, как и в TopSmile в Москве, обеспечивать высокий
                стандарт лечения, прогнозируемость результата и долгосрочную стабильность.
              </p>
            </div>
            <div className={styles.ratings}>
              <h3>Рейтинги и отзывы</h3>
              <ul>
                <li>
                  <span>Яндекс</span>
                  <strong>5.0</strong>
                </li>
                <li>
                  <span>Google</span>
                  <strong>5.0</strong>
                </li>
                <li>
                  <span>StartSmile</span>
                  <strong>5.0</strong>
                </li>
              </ul>
              <p className={styles.ratingsNote}>
                Высокие оценки — результат работы всей команды: врачей, ассистентов и администраторов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Подберите врача под вашу задачу</h2>
              <p>
                Расскажите о своей ситуации, и мы порекомендуем подходящего специалиста и
                предварительные варианты лечения.
              </p>
            </div>
            <form
              className={styles.ctaForm}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Ваше имя"
                className={styles.input}
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.ctaButton}>
                Записаться на консультацию
              </button>
              <p className={styles.notice}>
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой
                персональных данных.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamMain;


