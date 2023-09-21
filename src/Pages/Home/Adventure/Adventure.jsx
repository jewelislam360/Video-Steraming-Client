import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Adventure = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("https://video-streaming-server-sigma.vercel.app/allMovie/Adventure")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div className=' px-20'>
          <div className='flex justify-between'>
          <div className="mx-auto mb-2 text-center md:w-4/12">
          <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-b-white border-t-orange-700 py-4">
            ---- Adventures Movies ----
          </h3>
        </div>
            <div>
<<<<<<< HEAD
            <Link to="/movie"><button className='bg-red-600 rounded-md px-5 py-3'>More Movies</button></Link>
=======
              <h1 className='font-bold text-4xl text-orange-600'>Adventure Movies</h1>
            </div>
            <div>
            <Link to="/movie"><button className='bg-orange-600 btn btn-xl hover:bg-gray-700 hover:text-white'>See More</button></Link>
>>>>>>> 66a44c73196e06f7830fa7f0ef386431c7047958
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

export default Adventure;