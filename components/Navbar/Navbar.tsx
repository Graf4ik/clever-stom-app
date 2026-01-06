"use client"

import React, { FC, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from "next/link";
import Image from "next/image";
import { navigation } from './constants';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/logo.png" alt="Логотип" width={50} height={50}/>
                </Link>
                <div className={styles.logoText}>
                  <span className={styles.logoTitle}>Стоматология</span>
                  <span className={styles.logoSubtitle}>Клевер</span>
                </div>
            </div>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
              {navigation.map((item) => (
                <Link key={item.id} href={item.path} className={styles.navLink}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className={styles.headerContacts}>
              <a href="tel:+79150412893" className={styles.phone}>
                +7 (915) 041-28-93
              </a>
              <button className={styles.consultationBtn}>
                Записаться на прием
              </button>
            </div>

            <button
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
