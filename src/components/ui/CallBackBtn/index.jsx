import React from 'react';
import styles from './CallBackBtn.module.scss';
import { Button } from '../Button';
import arrowIcon from '../../../assets/imgs/arrow.png';

export const CallBackBtn = ({ children }) => {
  return (
    <Button>
      <div className={styles.wrapper}>
        <img src={arrowIcon} alt='arrow icon' className={styles.icon} />
        <div className={styles.text}>{children}</div>
      </div>
    </Button>
  );
};
