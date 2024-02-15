import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./DateSwiper.scss";
import { Navigation } from "swiper/modules";

const DateSwiper = () => {
    return (
        <>
            <div className="swiper-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    loop={false}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="#">第 1 天</a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">第 2 天</a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">第 3 天</a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">第 4 天</a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">第 5 天</a>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </>
    )
}

export default DateSwiper
