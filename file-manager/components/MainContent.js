import React from 'react';
import styles from './MainContent.module.css';
import Table from './Table';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <button className={styles.button}>Add Url</button>
        <button className={styles.button}>Resume</button>
        <button className={styles.button}>Stop</button>
        <button className={styles.button}>Stop All</button>
      </div>
      <Table />
    </div>
  );
};

export default MainContent;