import React from 'react';
import styles from './ClientsCarousel.module.scss';
import { CustomCarousel } from '../ui/Carousel';

export const ClientsCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <CustomCarousel text={'КЛИЕНТЫ'} countOfWords={3} />
      </div>
    </div>
  );
};
