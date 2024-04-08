import { useEffect } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import {Swiper, useSwiper, SwiperSlide} from "swiper/react";
import styles from "./Carousel.module.css";
import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper);
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

Controls.propTypes = {
    data: PropTypes.array.isRequired, 
}

const Carousel = ({data,renderCardComponent}) => {
    
    return (
        <div className={styles.wrapper}>
            <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
             <Controls data={data} /> 
               <CarouselLeftNav />
                {data.map(item => ( 
                    <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
                ))}
                <CarouselRightNav />
            </Swiper>
        </div>
      )
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired, 
    // Specify that 'data' should be an array and is required
    renderCardComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired, 
    // Adjust this based on your actual use case
  };

export default Carousel;