"use client";

import React from "react";
import styles from "./ContactsPageMain.module.scss";

const ContactsPageMain: React.FC = () => {
  return (
    <main className={styles.contacts}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Контакты стоматологии «Клевер»</h1>
          <p className={styles.subtitle}>
            Если у вас есть вопросы по лечению, записи или стоимости услуг — свяжитесь с нами
            удобным способом. Мы ответим, поможем с выбором врача и подберём комфортное время
            визита, как это делает команда TopSmile в Москве на своей странице контактов.
          </p>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Основные контакты</h2>
              <div className={styles.cardRow}>
                <span className={styles.label}>Адрес</span>
                <span className={styles.value}>
                  М.О., г. Раменское, ул. Чугунова, 21а
                </span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Телефон</span>
                <a href="tel:+79150412893" className={styles.value}>
                  +7 (915) 041-28-93
                </a>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>График работы</span>
                <span className={styles.value}>Ежедневно 09:00–21:00</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Email</span>
                <a href="mailto:info@kleverstom.ru" className={styles.value}>
                  info@kleverstom.ru
                </a>
              </div>
              <div className={styles.messengers}>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.messengerBtn}
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/kleverstom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.messengerBtnSecondary}
                >
                  Telegram
                </a>
              </div>
              <button className={styles.primaryBtn}>
                Записаться на приём
              </button>
            </div>

            <div className={styles.howTo}>
              <h2 className={styles.cardTitle}>Как добраться</h2>
              <p>
                Мы находимся в шаговой доступности от центра Раменского. Постройте маршрут в
                Яндекс Картах и выберите удобный способ добраться до нас.
              </p>
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.routeLink}
              >
                Построить маршрут в Яндекс Картах
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.mapTitle}>Мы на карте</h2>
        </div>
        <div className={styles.mapWrapper}>
          {/* Замените src на ваш конкретный виджет Яндекс или Google карт */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aexample&source=constructor"
            title="Карта проезда к стоматологии Клевер"
            frameBorder="0"
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Есть вопросы по лечению или ценам?</h2>
              <p>
                Оставьте контакты — администратор свяжется с вами, чтобы ответить на вопросы и
                помочь с записью. Формат похож на форму на странице контактов TopSmile.
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
                Отправить заявку
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

export default ContactsPageMain;


