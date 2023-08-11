import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const slide = [
        { id: 1, image: "https://streamo.vuejstemplate.com/images/slider/category-4.jpg", title: "Land And Sea", catagory: "Romantic Movie", time: "1:50 min" },
        { id: 2, image: "https://streamo.vuejstemplate.com/images/slider/slider-hm4-1.jpg", title: "The Lost Girl", catagory: "Romantic Movie", time: "1:50 min" },
        { id: 3, image: "https://streamo.vuejstemplate.com/images/slider/slider-hm4-2.jpg", title: "Land And Sea", catagory: "Romantic Movie", time: "1:50 min" }]
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        slide.map(s => <SwiperSlide
                            key={s.id}
                        >
                            <div className='relative '>
                                <img className='cover' src={s.image} alt="" />
                                <div className='absolute bottom-8 left-32'>
                                    <p className='text-6xl font-bold'>{s.title}</p>
                                    <div className='  flex   my-4'>
                                        <p className=''>{s.catagory}</p>
                                        <p className='mx-2'>|</p>
                                        <p className=''>{s.time}</p>
                                    </div>
                                    <button className="btn bg-red-700 text-white">Watch Now</button>
                                    
                                    
                                </div>
                                

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>

        </div>
    );
};

export default Banner;