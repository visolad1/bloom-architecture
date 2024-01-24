import styles from './SliderBtnNext.module.scss'

export const SliderBtnNext = ({ onClick }) => {
    return (
        <button className={`${styles.wrapper} btnNext`} onClick={onClick}>
            <svg className={styles.icon} width="61" height="24" viewBox="0 0 61 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.7151 8.20985C45.1746 5.49761 44.5084 2.23083 44.6943 0L46.6737 0.164949C46.5286 1.90663 47.0541 4.59861 49.1648 6.85201C51.2563 9.08493 54.4455 11.0068 61 11.0069V12.9931C54.4454 12.9931 51.2563 14.9151 49.1648 17.148C47.0541 19.4014 46.5286 22.0934 46.6737 23.835L44.6943 24C44.5084 21.7692 45.1746 18.5024 47.7151 15.7902C48.71 14.728 49.975 13.7688 51.5581 12.9931H0V11.0069H51.5581C49.975 10.2312 48.71 9.27203 47.7151 8.20985Z" fill="#1E1E1E" />
            </svg>
        </button>
    )
}