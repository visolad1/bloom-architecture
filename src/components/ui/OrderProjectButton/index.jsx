import React from 'react';
import styles from './OrderProject.module.scss';
import { Button } from '../Button';
import arrowIcon from '../../../assets/imgs/arrow.png';

export const OrderProjectButton = () => {
  return (
    <Button>
      <div className={styles.wrapper}>
        <img src={arrowIcon} alt='arrow icon' className={styles.icon} />
        <span className={styles.text}>Заказать проект</span>
      </div>
    </Button>
  );
};
