import React from 'react';
import { Container } from '../ui/Container';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>О НАС</h3>
        <p className={styles.textWhite}>
          Архитектура, задающая тон:
          <br /> наше агентство специализируется на создании инновационных и устойчивых зданий,{' '}
          <span className={styles.textGrey}>
            которые воплощают современные тенденции и технологии.
          </span>
        </p>
      </div>
    </Container>
  );
};
