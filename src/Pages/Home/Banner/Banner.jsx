import './Banner.css';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaFacebook, FaTwitter, FaYoutube, FaPlay, FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'


const Banner = () => {
    const [isVideoVisible, setVideoVisible] = useState(false);

    const toggleVideoVisibility = () => {
        setVideoVisible(!isVideoVisible);
    };
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])

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
                // autoplay={{
                //    delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper relative"
            >

                {
                    movies?.map(doc => <SwiperSlide
                        key={doc._id}
                    >
                        <div className='banner w-full' style={{ backgroundImage: `url(${doc.img})` }}>
                            <div className='lg:flex md:flex flex-1 justify-between items-center px-20'>
                                <div className='text-cyan-50 content'>
                                    <div className='mt-24 md:mt-0 lg:mt-0 xl:mt-0' data-aos="fade-down">
                                        <h1 className='movie-title max-w-[250px] text-2xl lg:text-5xl lg:font-extrabold text-orange-500'>
                                            {doc.title}
                                        </h1>
                                    </div>
                                    <div data-aos="fade-right">
                                        <h4 className='hidden lg:visible md:visible xl:visible  font-normal text-xl'>
                                            <span>{doc.rating}</span>
                                            <span><i className=' bg-red-600  px-1 py-1 inline-block rounded-sm'>{doc.like}</i></span>
                                            <span>{doc.time}</span>
                                            <span>{doc.category}</span>
                                        </h4>
                                        <p className=' lg:visible md:visible xl:visible text-xs font-light  leading-5 my-5'>{doc.description}</p>
                                            <button
                                                className='button flex justify-start items-center bg-orange-500 hover:bg-orange-800 relative'
                                                onClick={toggleVideoVisibility}
                                            >
                                                <FaPlay className='mr-1 text-white' />
                                                <span className='text-white'>Watch Now</span>
                                            </button>
                                            {isVideoVisible && (
                                                <video
                                                    src="../../../../public/assets/videos/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4"
                                                    className='absolute inset-0 w-screen object-cover'
                                                    controls
                                                    autoplay
                                                ></video>
                                            )}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end items-center p-4 text-center" data-aos="zoom-in-left">
                                    <h2 className='text-2xl font-extrabold text-orange-500 mb-2'>Watch Trailer</h2>
                                    <ReactPlayer
                                        className='react-player rounded-lg relative w-full aspect-w-16 aspect-h-9 lg:max-w-md lg:max-h-64 md:w-2/3 md:h-2/4'
                                        url={doc.trailer}
                                        controls={true}
                                        light={doc.img}
                                    />
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