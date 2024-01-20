import React from 'react';
import { Carousel } from '../Carousel';
import styles from './PortfolioCarousel.module.scss';

export const PortfolioCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Carousel text={'ПОРТФОЛИО'} />
      </div>
    </div>
  );
};
