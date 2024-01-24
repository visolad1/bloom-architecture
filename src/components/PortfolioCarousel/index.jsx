import React from 'react';
import { CustomCarousel } from '../ui/Carousel';
import styles from './PortfolioCarousel.module.scss';

export const PortfolioCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <CustomCarousel text={'ПОРТФОЛИО'} countOfWords={3} />
      </div>
    </div>
  );
};
