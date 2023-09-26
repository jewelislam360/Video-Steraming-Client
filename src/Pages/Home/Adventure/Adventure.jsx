import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

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
          <div className="flex justify-between">
        <div className=" mb-2 text-left md:w-4/12">
          <h3 className="text-4xl  text-orange-600 font-bold rounded-full capitalize  py-4">
             Adventure Movies 
          </h3>
        </div>
        <div>
          <Link to="/movie">
            <button className="bg-red-600 border-none text-white hover:bg-white-700 hover:text-black btn btn-xl">
              See More
            </button>
          </Link>
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
        <div className="">
          {movies?.map((movie) => (
            <SwiperSlide key={movie._id}>
              <MovieCard movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Adventure;
