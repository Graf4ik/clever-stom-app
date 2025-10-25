import React, { FC } from 'react';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
            {/* Логотип */}
            <div className={styles.logoText}>
                <img src="/logo.jpg" width={50}/>
            </div>
            Клевер
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
