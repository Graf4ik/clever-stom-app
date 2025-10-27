import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
            {/* Логотип */}
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.png" width={50}/>
                </Link>
                <div className={styles.logoText}> Стомотология <br /> Клевер</div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
