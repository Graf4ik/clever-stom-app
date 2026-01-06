"use client";

import React from "react";
import styles from "./AboutMain.module.scss";

const AboutMain: React.FC = () => {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>Клиника современной стоматологии «Клевер»</h1>
              <p className={styles.subtitle}>
                Мы объединяем экспертный уровень врачей, современные технологии и бережное
                отношение к каждому пациенту. Наша задача — не просто лечить зубы, а возвращать
                уверенность в улыбке и качество жизни.
              </p>
              <ul className={styles.heroList}>
                <li>Комплексный подход к лечению взрослых и детей</li>
                <li>Проверенные протоколы и только сертифицированные материалы</li>
                <li>Подробная диагностика и прозрачный план лечения до начала работ</li>
              </ul>
            </div>
            <div className={styles.heroImage}>
              <img src="/founder.jpg" alt="Команда клиники Клевер" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Философия клиники</h2>
          <p className={styles.sectionIntro}>
            Как и в TopSmile в Москве, мы строим клинику вокруг человека, а не только вокруг
            технологий лечения зубов
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Экспертная команда</h3>
              <p>
                Врачи с большим клиническим опытом, регулярным обучением и узкой специализацией —
                имплантация, ортопедия, ортодонтия, терапия, детская стоматология.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Безопасность и комфорт</h3>
              <p>
                Анестезия современного поколения, щадящие протоколы лечения, деликатный подход к
                пациентам с выраженным страхом стоматологов.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Прозрачные решения</h3>
              <p>
                Подробно объясняем каждый этап лечения, показываем снимки и фото до/после,
                согласуем план и стоимость ещё до начала лечения.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Современные технологии</h3>
              <p>
                Используем цифровую диагностику, компьютерное моделирование улыбки,
                микроскопическую стоматологию, качественную лабораторную поддержку.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>лет клинического опыта команды</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>успешных имплантаций и сложных работ</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5.0</span>
              <span className={styles.statLabel}>средняя оценка по отзывам пациентов</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>поддержка и сопровождение лечения</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comfort}>
        <div className={styles.container}>
          <div className={styles.comfortContent}>
            <div className={styles.comfortText}>
              <h2 className={styles.sectionTitle}>Пространство заботы</h2>
              <p>
                Интерьер клиники, маршруты приёма и работа команды организованы так, чтобы вы
                чувствовали себя спокойно и уверенно. От первого звонка до завершения лечения вас
                сопровождает персональный администратор и координатор лечения.
              </p>
              <p>
                Мы ценим ваше время: планируем приёмы без очередей, заранее напоминаем о визитах и
                подбираем удобный график лечения даже при плотном расписании.
              </p>
            </div>
            <div className={styles.comfortPanel}>
              <div className={styles.comfortItem}>
                <span className={styles.comfortLabel}>Адрес</span>
                <span className={styles.comfortValue}>М.О., г. Раменское, ул. Чугунова, 21а</span>
              </div>
              <div className={styles.comfortItem}>
                <span className={styles.comfortLabel}>График работы</span>
                <span className={styles.comfortValue}>Ежедневно 09:00–21:00</span>
              </div>
              <div className={styles.comfortItem}>
                <span className={styles.comfortLabel}>Телефон</span>
                <a href="tel:+79150412893" className={styles.comfortValue}>
                  +7 (915) 041-28-93
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Запишитесь на консультацию в «Клевер»</h2>
              <p>
                Оставьте свои контакты, и администратор свяжется с вами, чтобы подобрать удобное
                время и ответить на ваши вопросы о лечении.
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
                Записаться на приём
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

export default AboutMain;


