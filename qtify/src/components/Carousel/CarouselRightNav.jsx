import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import rightarrow from "../../assets/rightarrow.svg";
import styles from "./CarouselRight.module.css";

const CarouselRightNav = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd);
        })
    })
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <img src={rightarrow} alt="RightArrow" onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNav;