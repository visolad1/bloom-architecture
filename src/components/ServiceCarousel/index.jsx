import React from 'react';
import { Carousel } from '../Carousel';
import styles from './ServiceCarousel.module.scss';

export const ServiceCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Carousel text={'СЕРВИСЫ'} />
      </div>
    </div>
  );
};
