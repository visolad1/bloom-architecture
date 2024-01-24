import React from 'react';
import styles from './Navigation.module.scss';
import logo from '../../assets/imgs/logo.svg';

export const Navigation = () => {
  const navList = [
    { id: 1, name: 'О нас', link: '#about-us' },
    { id: 2, name: 'Сервисы', link: '#services' },
    { id: 3, name: 'Портфолио', link: '#portfolio' },
    { id: 4, name: 'Клиенты', link: '#clients' },
    { id: 5, name: 'Контакты', link: '#contacts' },
  ];

  const languages = ['EN', 'RU', 'UZ'];

  const [activeLink, setActiveLink] = React.useState(1);
  const [activeLanguage, setActiveLanguage] = React.useState(1);

  return (
    <nav className={styles.nav}>
      <a href='/'>
        <img src={logo} alt='logo img' className={styles.logo} />
      </a>
      <div className={styles.wrapper}>
        <ol className={styles.navList}>
          {navList.map(({ id, name, link }) => (
            <li
              className={`${styles.listItem} ${activeLink === id ? styles.active : ''}`}
              key={id}
              onClick={() => setActiveLink(id)}
            >
              <a href={link}>{name}</a>
            </li>
          ))}
        </ol>

        <ol className={styles.languageList}>
          {languages.map((item, i) => (
            <li
              className={`${styles.languageListItem} ${activeLanguage === i ? styles.activeLanguage : ''}`}
              key={item}
              onClick={() => setActiveLanguage(i)}
            >
              <a href='#'>{item}</a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
