import { useEffect, useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
<<<<<<< HEAD
    <div className="my-8 px-20">
      <div className="flex justify-between">
        <div className="mx-auto mb-2 text-center md:w-4/12">
          <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-orange-700 py-4">
            ---- All Movies ----
          </h3>
        </div>
        <div>
          <Link to="/movie">
            <button className="bg-red-600 px-5 py-3 rounded-md">More Movies</button>
          </Link>
        </div>
=======
    

        
      <div className='my-8 px-20'>
        <div className='flex justify-between'>
            <div>
              <h1 className='font-bold text-4xl text-orange-600'>All Movies</h1>
            </div>
            <div>
            <Link to="/movie"><button className='bg-orange-600 btn btn-xl hover:bg-gray-700 hover:text-white'>See More</button></Link>
            </div>
          </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              movies?.map(movie => <SwiperSlide><MovieCard
                key={movie.id}
                movie={movie}
              ></MovieCard></SwiperSlide>)

            }

          </div>


        </Swiper>

>>>>>>> 66a44c73196e06f7830fa7f0ef386431c7047958
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        <div className="">
          {movies?.map((movie) => (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AllMovies;
