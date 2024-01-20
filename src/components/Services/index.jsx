import React from 'react';
import styles from './Services.module.scss';
import { Container } from '../ui/Container';
import img from '../../assets/imgs/service-image.png';

export const Services = () => {
  const list = [
    { id: 1, item: 'Архитектурное проектирование' },
    { id: 2, item: 'Дизайн итерьера' },
    { id: 3, item: 'Проектирование городской среды' },
    { id: 4, item: 'Ландшафтный дизайн' },
    { id: 5, item: 'Проектная документация' },
    { id: 6, item: 'Авторский надзор' },
  ];

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={img} alt='img' className={styles.img} />
        </div>
        <ol className={styles.list}>
          {list.map(({ id, item }) => (
            <li key={id} className={styles.listItem}>
              <span className={styles.listItemText}>{item}</span>
              <span className={styles.num}>0{id}</span>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
};
