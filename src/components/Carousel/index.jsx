import React from 'react';
import styles from './Carouse.module.scss';
import Slider from 'react-slick';

export const Carousel = ({ text }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: false,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <p className={styles.item}>{text}</p>
        <p className={styles.item}>{text}</p>
      </Slider>
    </div>
  );
};
