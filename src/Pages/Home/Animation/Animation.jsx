import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Animation = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("https://video-streaming-server-sigma.vercel.app/allMovie/Animation")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div className=' px-20'>
          <div className='flex justify-between'>
            <div>
              <h1 className='font-bold text-4xl'>Animation Movies</h1>
            </div>
            <div>
              <Link to="/movie"><button className='bg-red-600 px-5 py-3'>More Movies</button></Link>
            </div>
          </div>
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
             movies?.map(movie=><SwiperSlide key={movie._id}><MovieCard
             movie={movie}
             ></MovieCard></SwiperSlide>)   
            
            }
        
    </div>
        
        
      </Swiper>

        </div>
    );
};

export default Animation;