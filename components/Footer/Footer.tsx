import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
      <footer className={styles.footer}>
          <div className={styles.container}>
              <div className={styles.footerContent}>
                  <div className={styles.footerSection}>
                      <div className={styles.logo}>
                          <Image src="/logo.png" alt="Логотип" width={50} height={50} />
                          <div className={styles.logoText}>
                              <span className={styles.logoTitle}>Стоматология</span>
                              <span className={styles.logoSubtitle}>Клевер</span>
                          </div>
                      </div>
                      <p className={styles.description}>
                          Современная стоматология для всей семьи. 
                          Экспертный уровень лечения с заботой о каждом пациенте.
                      </p>
                  </div>

                  <div className={styles.footerSection}>
                      <h3 className={styles.sectionTitle}>Навигация</h3>
                      <ul className={styles.links}>
                          <li><Link href="/#services">Услуги</Link></li>
                          <li><Link href="/#about">О клинике</Link></li>
                          <li><Link href="/#team">Команда</Link></li>
                          <li><Link href="/#works">Работы</Link></li>
                          <li><Link href="/#prices">Цены</Link></li>
                          <li><Link href="/#reviews">Отзывы</Link></li>
                          <li><Link href="/#contacts">Контакты</Link></li>
                      </ul>
                  </div>

                  <div className={styles.footerSection}>
                      <h3 className={styles.sectionTitle}>Услуги</h3>
                      <ul className={styles.links}>
                          <li><Link href="/#services">Имплантация</Link></li>
                          <li><Link href="/#services">Протезирование</Link></li>
                          <li><Link href="/#services">Ортодонтия</Link></li>
                          <li><Link href="/#services">Эстетическая стоматология</Link></li>
                          <li><Link href="/#services">Детская стоматология</Link></li>
                          <li><Link href="/#services">Терапия</Link></li>
                      </ul>
                  </div>

                  <div className={styles.footerSection}>
                      <h3 className={styles.sectionTitle}>Контакты</h3>
                      <div className={styles.contacts}>
                          <a href="tel:+79150412893" className={styles.contactItem}>
                              +7 (915) 041-28-93
                          </a>
                          <a href="mailto:info@cleverstom.ru" className={styles.contactItem}>
                              info@cleverstom.ru
                          </a>
                          <address className={styles.contactItem}>
                              М.О., г. Раменское,<br />
                              Чугунова, 21а
                          </address>
                          <div className={styles.contactItem}>
                              Ежедневно 09:00-21:00
                          </div>
                      </div>
                      <div className={styles.social}>
                          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                              WhatsApp
                          </a>
                          <a href="https://t.me/kleverstom" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                              Telegram
                          </a>
                      </div>
                  </div>
              </div>

              <div className={styles.footerBottom}>
                  <p className={styles.copyright}>
                      © 2025 Стоматология Клевер. Все права защищены.
                  </p>
                  <div className={styles.legal}>
                      <Link href="/privacy">Политика конфиденциальности</Link>
                      <Link href="/terms">Пользовательское соглашение</Link>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer; 