import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES } from '../constants/images.jsx';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function NewSwiper() {
    return (
        <> 
            <Swiper
                slidesPerView={3.2}
                centeredSlides={true}
                spaceBetween={10}
                grabCursor={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {IMAGES.map((image, key) => (
                    <SwiperSlide key={key}>
                        <img src={image.src} alt={`slide-${key}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}
