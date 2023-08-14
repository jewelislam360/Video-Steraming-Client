import React, { useEffect, useState } from 'react';

import MovieCard from '../MovieCard/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const AllMovies = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div className='my-64 px-10'>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <div className=''>
            
            {
             movies?.map(movie=><SwiperSlide><MovieCard
             key={movie.id}
             movie={movie}
             ></MovieCard></SwiperSlide>)   
            
            }
        
    </div>
        
        
      </Swiper>

        </div>

      
   


        
        
    );
};

export default AllMovies;