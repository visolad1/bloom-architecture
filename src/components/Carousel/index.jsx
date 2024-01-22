import React from 'react';
import styles from './Carousel.module.scss';
import Slider from 'react-slick'

export const CustomCarousel = ({ text, countOfWords }) => {
  const settings = {
    arrows: false,
    slidesToShow: 2,
    infinity: true,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };
  const arr = []
  for (let i = 0; i < countOfWords; i++){
    arr.push(1)
  }
  console.log(arr)
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
          {arr.map(_ => <div className={styles.item}>{text}</div>)}
      </Slider>
    </div>
  );
};
