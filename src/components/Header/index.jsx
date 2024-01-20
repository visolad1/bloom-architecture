import React from 'react';
import styles from './Header.module.scss';
import { Container } from '../ui/Container';
import { CallBackModal } from '../CallBackModal';
import { CallBackBtn } from '../ui/CallBackBtn';

export const Header = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisible]);
  return (
    <>
      <Container>
        <main className={styles.main}>
          <h1 className={styles.title}>Bloom Architechture</h1>
          <div className={styles.btn} onClick={() => setModalVisible(true)}>
            <CallBackBtn>
              Заказать <br /> проект
            </CallBackBtn>
          </div>
        </main>
      </Container>
      {modalVisible && <CallBackModal setModalVisible={setModalVisible} />}
    </>
  );
};
