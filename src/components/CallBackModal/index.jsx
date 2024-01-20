import React from 'react';
import styles from './CallBackModal.module.scss';
import { Modal } from '../ui/Modal';
import closeIcon from '../../assets/imgs/close-btn-icon.svg';

export const CallBackModal = ({ setModalVisible }) => {
  return (
    <Modal>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4 className={styles.title}>Обратный звонок</h4>
          <button className={styles.closeBtn} onClick={() => setModalVisible(false)}>
            <img src={closeIcon} alt='close btn icon' />
          </button>
        </div>
        <form action='#' className={styles.form}>
          <input type='text' placeholder='Ваше имя' className={styles.input} />
          <input type='text' placeholder='Номер телефона' className={styles.input} />
        </form>
        <div className={styles.footer}>
          <p className={styles.footerText}>Оставьте заявку и мы свяжемся с вами</p>
          <div className={styles.btn}>
            
          </div>
        </div>
      </div>
    </Modal>
  );
};
