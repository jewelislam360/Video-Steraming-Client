import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner3.css';

//import images
import movieCard00 from '../../../../public/assets/images/banner/venom.webp'
import movieCard01 from '../../../../public/assets/images/banner/banner01.jpg'
import movieCard02 from '../../../../public/assets/images/banner/banner02.jpg'
import movieCard03 from '../../../../public/assets/images/banner/banner03.jpg'
import movieCard04 from '../../../../public/assets/images/banner/banner04.jpg'
import movieCard05 from '../../../../public/assets/images/banner/hobbit.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner3 = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={movieCard00} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={movieCard01} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={movieCard02} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={movieCard03} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={movieCard04} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={movieCard05} alt="" srcset="" />
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}

export default Banner3;



