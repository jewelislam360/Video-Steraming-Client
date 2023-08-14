import React from 'react';
// Import Swiper React components
import { AiOutlineLike } from "react-icons/ai";
import { FaPlus, FaRegPlayCircle, FaShareAlt, } from "react-icons/fa";


const MovieCard = ({ movie }) => {
    const { id, title, img, video, like, trailer, description, time, rating, category } = movie;
    return (
        <>
                
                    <div className="card card-compact w-full bg-black  ">
                        <div className='relative group'>
                        <figure><img className='group-hover:scale-150 group-hover:opacity-50 group-hover:duration-300 transition-all ease-out' src={img} alt="Shoes" /></figure>

                        <div className='  flex gap-4 absolute bottom-0 right-0 '>
                                <p className=''><button ><AiOutlineLike></AiOutlineLike>{like}</button></p>
                                <p><button><FaShareAlt></FaShareAlt></button></p>
                                <p><button><FaPlus></FaPlus></button></p>

                            </div>
                            <div>
                            <button className=" text-red-600  group/edit invisible absolute bottom-[43%] right-[43%] group-hover/:visible "><a href={video}><FaRegPlayCircle className='w-14 h-14'></FaRegPlayCircle></a></button>
                            </div>

                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">{title}</h2>
                            <div className='flex'>
                                <p>{time}</p>
                                <p>{category}</p>
                            </div>
                            
                            
                        </div>
                    </div>

                
        </>
    );
};

export default MovieCard;