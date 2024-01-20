import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ children }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.children}>{children}</span>
    </button>
  );
};
