import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.scss";
import sliderImg1 from '../../assets/imgs/projects-img1.png'
import sliderImg2 from '../../assets/imgs/projects-img2.png'
import sliderImg3 from '../../assets/imgs/projects-img3.png'

export const Projects = () => {
    const imgs = [{ id: 1, img: sliderImg2, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }, { id: 2, img: sliderImg1, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }, { id: 3, img: sliderImg3, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }]
    const settings = {
        centerMode: true,
        centerPadding: '10%',
        initialSlide: 1,
        slidesToShow: 2,
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        className: styles.slider,

    };
    return (

        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {imgs.map((img) => <div className={styles.imgWrapper} key={img.id}>
                        <img src={img.img} alt="image" className={styles.img} />
                        <div className={styles.slideText}>
                            <span className={styles.slideId}>-0{img.id}-</span>
                            <h4 className={styles.slideTitle}>{img.title}</h4>
                            <p className={styles.p}> {img.description}</p>
                        </div>
                    </div>)}
                </Slider>
            </div>
        </div>


    );
};
