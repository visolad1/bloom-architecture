import Slider from "react-slick"
import styles from './Clients.module.scss'

export const Clients = () => {
    const settings = {

    }
    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>

            </Slider>
        </div>
    )
}
