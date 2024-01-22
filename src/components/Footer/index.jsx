import React from "react";
import { Container } from '../ui/Container'
import { CallBackBtn } from "../ui/CallBackBtn";
import { CallBackModal } from '../CallBackModal'
import styles from './Footer.module.scss'
import logo from '../../assets/imgs/logo.svg'
import IG from '../../assets/imgs/instagram.svg'
import BE from '../../assets/imgs/behance.svg'
import FB from '../../assets/imgs/facebook 1.svg'
import VK from '../../assets/imgs/vk.svg'
import { Button } from "../ui/Button";


export const Footer = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        if (modalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalVisible]);

    const footerList = [
        { id: 1, link: '#about-us', name: 'О нас' },
        { id: 2, link: '#contacts', name: 'Контакты' },
        { id: 3, link: '#services', name: 'Сервисы' },
        { id: 4, link: '#portfolio', name: 'Портфолио' },
        { id: 5, link: '#clients', name: 'Клиенты' }
    ]
    const icons = [IG, BE, FB, VK]
    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                <div className={styles.footerNav}>
                    <a href="/">
                        <img src={logo} alt="logo" className={styles.logo} />
                    </a>
                    <ul>
                        {footerList.map(item => <li className={styles.listItem} key={item.id}><a href={item.link}>{item.name}</a></li>)}
                    </ul>
                </div>
                <div className={styles.btn} onClick={() => setModalVisible(true)} >
                    <CallBackBtn>
                        Заказать <br /> проект
                    </CallBackBtn>
                </div>
                <ul className={styles.iconsList}>
                    {icons.map((icon, index) => <li className={styles.iconsListItem}><Button><img src={icon} alt="icon" /></Button></li>)}
                </ul>
                <ul className={styles.contacts}>
                    <li className={styles.contactsItem}>+998 (90) 985 64 89</li>
                    <li className={styles.contactsItem}>ул. Буюк Ипак Йули, 154А</li>
                    <li className={styles.contactsItem}>info@bloom-arc@gmail.com</li>
                </ul>
                <p className={styles.copyright}>©2024. Bloom Architecture- Все права защищены</p>
            </div>
            {modalVisible && <CallBackModal setModalVisible={setModalVisible} />}

        </footer >
    )
}