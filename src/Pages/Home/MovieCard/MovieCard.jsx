import React from 'react';
// Import Swiper React components
import { AiOutlineLike ,AiOutlineHeart} from "react-icons/ai";
import { FaPlay, FaPlus, FaShareAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const { _id, title, img, video, like, trailer, description, time, rating, category } = movie;
    return (
        <>

            <div className="card card-compact w-full bg-black  ">
                <div className='relative group'>
                    <figure><img className='group-hover:scale-150 group-hover:opacity-50 group-hover:duration-300 transition-all ease-out' src={img} alt="Shoes" /></figure>

                    <div className='  flex gap-4 absolute bottom-0 right-0 '>
                        <p className=''><button ><AiOutlineHeart className='text-xl'/></button></p>
                        {/* <p ><button><FaShareAlt></FaShareAlt></button></p> */}

                        {/*      <!-- Component: Bottom base sized tooltip --> */}
                        <span
                            className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
                            aria-describedby="tooltip-02"
                        >
                            {/*        <!-- Tooltip trigger --> */}
                            <FaShareAlt />
                            {/*        <!-- End Tooltip trigger --> */}
                            <span
                                role="tooltip"
                                id="tooltip-02"
                                className="invisible absolute top-full left-1/2 z-10 w-9 -translate-x-1/2 rounded bg-slate-100 p-2 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-100 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
                            >
                                <div className='mx-auto'>
                                    <FaFacebookF className='text-black hover:text-red-700 mr-2 text-xl mt-2 mb-2' />
                                    <FaInstagram className='text-black hover:text-red-700 mr-2 text-xl mt-2 mb-2' />
                                    <FaTwitter className='text-black hover:text-red-700 mr-2 text-xl mt-2 mb-2' />
                                </div>
                            </span>
                        </span>
                        {/*      <!-- End Bottom base sized tooltip --> */}

                      
                       
                            {/*        <!-- Tooltip trigger --> */}
                            <FaPlus />
                            {/*        <!-- End Tooltip trigger --> */}
                            
                        

                    </div>
                    <div>
                        <Link to={`viewPlayer/${_id}`}>
                            <button className=" bg-red-600 p-5 rounded-full  group/edit invisible absolute bottom-[45%] right-[45%] group-hover/:visible "><FaPlay className=''></FaPlay></button>
                        </Link>
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