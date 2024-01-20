import React from 'react';
import styles from './Modal.module.scss';

export const Modal = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
