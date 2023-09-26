import React from "react";
// Import Swiper React components

import { AiOutlineLike } from "react-icons/ai";
import { FaPlay, FaPlus, FaShareAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    _id,
    title,
    img,
    video,
    like,
    trailer,
    description,
    time,
    rating,
    category,
  } = movie;
 const videoTitle=title?.length>= 49 ? title: title.slice(0,49)+"..."
  return (
    <>
      <div className="card card-compact w-full hover:text-orange-500">
        <div className="relative group">
          <figure>
            {/* <img
              className="group-hover:scale-150 group-hover:opacity-50 group-hover:duration-300 transition-all ease-out"
              src={img}
              alt="Shoes"
            /> */}
            <ReactPlayer
              className="react-player mx-auto"
              url={video}
              controls={true}
              light={img}
              height="170px"
            />
          </figure>

          {/* <div className="  flex gap-4 absolute bottom-0 right-0 ">
            <p className="">
              <button>
                <AiOutlineLike></AiOutlineLike>
                {like}
              </button>
            </p>
            <p>
              <button>
                <FaShareAlt></FaShareAlt>
              </button>
            </p>
            <p>
              <button>
                <FaPlus></FaPlus>
              </button>
            </p>
          </div> */}
          {/* <div>
            <Link to={`viewPlayer/${_id}`}>
              <button className=" bg-red-600 p-5 rounded-full  group/edit invisible absolute bottom-[45%] right-[45%] group-hover/:visible ">
                <FaPlay className=""></FaPlay>
              </button>
            </Link>
          </div> */}
        </div>
        <div className="card-body ">
          <Link to={`viewPlayer/${_id}`} className="hover:underline hover:text-blue-600 text-lg">{videoTitle}</Link>
          <div className="flex">
            <p>{time}</p>
            <p className="text-orange-600">{category}</p>
          </div>
        </div>
      </div>
    </>
  );

};

export default MovieCard;
