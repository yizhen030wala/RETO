// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./DateSwiper.scss";
// import { Navigation } from "swiper/modules";

// const DateSwiper = () => {
//     return (
//         <>
//             <div className="swiper-container">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={0}
//                     loop={false}
//                     navigation={{
//                         prevEl: ".swiper-button-prev",
//                         nextEl: ".swiper-button-next",
//                     }}
//                     modules={[Navigation]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         <a href="#">第 1 天</a>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <a href="#">第 2 天</a>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <a href="#">第 3 天</a>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <a href="#">第 4 天</a>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <a href="#">第 5 天</a>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <a href="#">第 6 天</a>
//                     </SwiperSlide>
//                 </Swiper>
//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>
//             </div>
//         </>
//     )
// }

// export default DateSwiper


// =====================================================================================
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./DateSwiper.scss";
import { Navigation } from "swiper/modules";

const DateSwiper = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

    const handleDateClick = (index) => {
        setSelectedDateIndex(index);
    };

    return (
        <>
            <div className="swiper-container">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={false}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4, 5, 6].map((day, index) => (
                        <SwiperSlide key={index} className={index === selectedDateIndex ? "swiper-slide selected" : "swiper-slide"}>
                            <div href="#" onClick={() => handleDateClick(index)}>
                                第 {day} 天
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </>
    );
};

export default DateSwiper;


