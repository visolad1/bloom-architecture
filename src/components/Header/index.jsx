import React from 'react';
import styles from './Header.module.scss';
import { OrderProjectButton } from '../ui/OrderProjectButton';
import { Container } from '../ui/Container';

export const Header = () => {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>Bloom Architechture</h1>
        <div className={styles.btn}>
          <OrderProjectButton />
        </div>
      </main>
    </Container>
  );
};
