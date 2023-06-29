import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductSlider = () => {
    return (
      <div className="container py-4 px-4 justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper" 
          spaceBetween={40}
          slidesPerView={5}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>
    );
};

export default ProductSlider;