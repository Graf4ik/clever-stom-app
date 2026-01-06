"use client";

import React from "react";
import styles from "./PricesMain.module.scss";
import { priceSections } from "@/components/Prices/constants";

const PricesMain: React.FC = () => {
  return (
    <main className={styles.prices}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Цены на услуги стоматологии «Клевер»</h1>
          <p className={styles.subtitle}>
            Прозрачный и понятный прайс без скрытых платежей. Окончательная стоимость лечения
            формируется после очной консультации и диагностики.
          </p>
        </div>
      </section>

      <section className={styles.sections}>
        <div className={styles.container}>
          {priceSections.map((section) => (
            <div key={section.id} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.table}>
                {section.items.map((item) => (
                  <div key={item.id} className={styles.row}>
                    <div className={styles.cellName}>{item.name}</div>
                    <div className={styles.cellDots}></div>
                    <div className={styles.cellPrice}>{item.price}</div>
                  </div>
                ))}
              </div>
              <button className={styles.sectionButton}>
                Записаться на консультацию
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Получите прайс и план лечения</h2>
              <p>
                Оставьте контакты, и мы вышлем подробный каталог с примерами работ и
                ориентировочными ценами на лечение.
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
                Получить прайс
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

export default PricesMain;


