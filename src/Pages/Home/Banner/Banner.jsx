import './Banner.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaFacebook, FaTwitter, FaYoutube, FaPlay, FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'

import banner1 from '../../../../public/assets/images/banner/spider-man.jpg'
import banner2 from '../../../../public/assets/images/banner/avenger.jpg'
import banner3 from '../../../../public/assets/images/banner/dark-knight.jpg'
import banner4 from '../../../../public/assets/images/banner/Jungle-Book.webp'
import banner5 from '../../../../public/assets/images/banner/star-wars.webp'
import banner6 from '../../../../public/assets/images/banner/venom.webp'
import banner7 from '../../../../public/assets/images/banner/Avatar.jpg'


const Banner = () => {
    const slidDoc = [{
        bgImg: banner1,
        id: 1,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/spider-man-title.png",
        year: '2021',
        watch_time: '2h 14min',
        total_view: '50+',
        category: 'Romantic',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner2,
        id: 3,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/avenger-title.png",
        year: '2020',
        watch_time: '2h 14min',
        total_view: '27+',
        category: 'Action',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner3,
        id: 3,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/the-dark-knight.png",
        year: '2017',
        watch_time: '2h',
        total_view: '43+',
        category: 'Advanture',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner4,
        id: 4,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/jungle-book.png",
        year: '2016',
        watch_time: '1h 14min',
        total_view: '23+',
        category: 'Animation',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner5,
        id: 5,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/star-wars.png",
        year: '2010',
        watch_time: '3h 14min',
        total_view: '30+',
        category: 'Horror',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner6,
        id: 6,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/venom-title.png",
        year: '2007',
        watch_time: '2h 14min',
        total_view: '27+',
        category: 'Animation',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        bgImg: banner7,
        id: 7,
        video: "../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4",
        movieTitle: "../../../../public/assets/images/banner/avatar.png",
        year: '2007',
        watch_time: '2h 14min',
        total_view: '27+',
        category: 'Animation',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    ]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper relative"
            >

                {
                    slidDoc.map(doc => <SwiperSlide
                        key={doc.id}
                    >
                        <div className='banner w-full' style={{ backgroundImage: `url(${doc.bgImg})` }}>
                            <div className='lg:flex md:flex flex-1 justify-center items-center'>
                                <div className=' content'>
                                    <div className='mt-24 md:mt-0 lg:mt-0 xl:mt-0' data-aos="fade-down">
                                        <img className='movie-title max-w-[250px]' src={doc.movieTitle} alt="" />
                                    </div>
                                    <div data-aos="fade-right">
                                        <h4 className='hidden lg:visible md:visible xl:visible text-gray-300 font-normal text-xl'>
                                            <span>{doc.year}</span>
                                            <span><i className=' bg-red-600 text-white px-1 py-1 inline-block rounded-sm'>{doc.total_view}</i></span>
                                            <span>{doc.watch_time}</span>
                                            <span>{doc.category}</span>
                                        </h4>
                                        <p className=' lg:visible md:visible xl:visible text-xs font-light text-white leading-5 my-5'>{doc.para}</p>
                                        <button className='button flex justify-start items-center w-36'>
                                            <FaPlay className='mr-1' />
                                            <span>Watch Now</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end items-end p-4 text-center" data-aos="zoom-in-left">
                                    <h2 className='text-2xl font-extrabold text-white mb-2'>Watch Trailer</h2>
                                    <video className=' w-[100%] lg:w-2/3 lg:h-2/4 md:w-2/3 md:h-2/4 rounded-lg relative' src="../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4"
                                        muted
                                        controls="true"
                                        light='true'
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="autoplay-progress absolute" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;