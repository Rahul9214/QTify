import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import leftarrow from "../../assets/leftarrow.svg";
import styles from "./CarouselLeft.module.css"

const CarouselLeftNav = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
        })
    },[swiper]);
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <img src={leftarrow} alt="Left Arrow" onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNav;