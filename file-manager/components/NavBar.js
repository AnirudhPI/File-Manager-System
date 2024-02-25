import React from 'react';
import styles from './NavBar.module.css'; 
import Image from 'next/image';
import IDM from '../assets/Internet-Download-Manager.webp';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <div className={styles.navRow}>
            <div className={styles.nameHolder}>
            <Image src={IDM} alt="Internet Download Manager Logo"
                width={25} 
                height={25}
                objectFit="contain" 
                />
                <div className={styles.title}>
                    Internet Download Manager 10.36
                </div>
            </div>
        <div className={styles.menu}>
            <a className={styles.menuItem} href="#">Tasks</a>
            <a className={styles.menuItem} href="#">File</a>
            <a className={styles.menuItem} href="#">Downloads</a>
            <a className={styles.menuItem} href="#">View</a>
            <a className={styles.menuItem} href="#">Help</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
