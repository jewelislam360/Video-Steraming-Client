import React from 'react';
import {FaGenderless} from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner3.css'

import bannerImage from '../../../../public/assets/images/banner/banner3.jpg'

// title image
import banner1 from '../../../../public/assets/images/banner/avatar.png'
import banner2 from '../../../../public/assets/images/banner/spider-man-title.png'
import banner7 from '../../../../public/assets/images/banner/avenger-title.png'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner3 = () => {
    const slidDoc = [{
        id: 1,
        title: banner1,
        sub_title: 'Avatar Part-1',
        season:1,
        episodes:3,
        year:2003,
        category:'Comedy',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    },
    {
        id: 2,
        title: banner2,
        sub_title: 'Spaider Man Untold',
        season:2,
        episodes:4,
        year:2021,
        category:'Action',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet'

    },
    {
        id: 3,
        title: banner7,
        sub_title: 'Avenger Part-3',
        season:3,
        episodes:2,
        year:2020,
        category:'Romance',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?'

    }
    ]
    return (
        <div className='mx-20'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper my-10"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            `url(${bannerImage})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                {
                    slidDoc.map(doc => <SwiperSlide
                        key={doc.id}
                    >
                        <div className='lg:px-20 px-2 lg:py-10'>
                            <div className="text-4xl font-light" data-swiper-parallax="-300">
                                <div className='pt-10' data-aos="fade-down">
                                    <img className='movie-title lg:max-w-[250px] max-w-[100px]' src={doc.title} alt="" />
                                </div>
                            </div>
                            <div className="lg:text-xl text-cyan-50" data-swiper-parallax="-200">
                                {doc.sub_title}
                            </div>
                            <div className='flex lg:gap-2 gap-1 justify-start items-center text-cyan-50'>
                                <FaGenderless className='text-orange-500'/><h4>{doc.season} Season</h4>
                                <FaGenderless className='text-orange-500'/><span>{doc.episodes} Episodes</span>
                                <FaGenderless className='text-orange-500'/><p>{doc.year}</p>
                                <FaGenderless className='text-orange-500'/><p>{doc.category}</p>
                            </div>
                            <div className="lg:text-base text-sm text-cyan-50 pt-4" data-swiper-parallax="-100">
                                <p>
                                    {doc.discription}
                                </p>
                            </div>
                            <button className='btn btn-outline mt-4 text-cyan-50 bg-orange-500 hover:bg-orange-800 hover:text-white border-none'>Play Now</button>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner3;