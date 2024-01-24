import React from 'react';
import styles from './ServiceCarousel.module.scss';
import { CustomCarousel } from '../ui/Carousel';

export const ServiceCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <CustomCarousel text={'СЕРВИСЫ'} countOfWords={3} />
      </div>
    </div>
  );
};
