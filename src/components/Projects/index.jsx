import Slider from "react-slick";
import styles from "./Projects.module.scss";
import { SliderBtnNext } from "../SliderBtnNext";
import { SliderBtnPrev } from "../SliderBtnPrev";
import sliderImg1 from '../../assets/imgs/projects-img1.png'
import sliderImg2 from '../../assets/imgs/projects-img2.png'
import sliderImg3 from '../../assets/imgs/projects-img3.png'
import './slider.scss'

export const Projects = () => {
    const imgs = [{ id: 1, img: sliderImg1, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }, { id: 2, img: sliderImg2, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }, { id: 3, img: sliderImg3, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }, { id: 4, img: sliderImg1, title: 'Зеркальный Лабиринт', description: ' жилой комплекс с зеркальными стенами' }]
    const settings = {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30%',
        nextArrow: <SliderBtnNext />,
        prevArrow: <SliderBtnPrev />,
    }

    return (

        <div className={styles.container}>
            <div className={`${styles.sliderWrapper} projects-wrapper`}>
                <Slider {...settings}>
                    {imgs.map((img) => <div className={`${styles.imgWrapper} slide`} key={img.id}>
                        <img src={img.img} alt="image" className={styles.img} />
                        <div className={`${styles.slideText} sliderText`}>
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
