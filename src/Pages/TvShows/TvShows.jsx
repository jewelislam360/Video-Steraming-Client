import React, { useEffect, useState } from 'react';
import MovieCard from '../Home/MovieCard/MovieCard';
import { AiOutlineFolderOpen } from "react-icons/ai";
import bg from "../../Pages/ErrorPage/img/ErrorBgImg.jpg";
import { FaCaretRight, FaHome } from 'react-icons/fa';

const TvShows = () => {
    const [tvShows, setTvShows] = useState();

    useEffect(() => {
        fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
            .then(res => res.json())
            .then(data => {
                setTvShows(data);
                // console.log(data)
            })
    }, []);


    // search text
    const searchField = (event) => {
        event.preventDefault();
        const form = event.target;
        const tvshowName = form.tvshowName.value;
        fetch(`https://video-streaming-server-sigma.vercel.app/searchName/${tvshowName}`)
        .then((res) => res.json())
        .then((data) => {
            setTvShows(data);
            // console.log(data);
        });
        event.target.reset();
    }

    // category data
    const categoryField = (event) => {
        event.preventDefault();
        const form = event.target;
        const categoryName = form.categoryName.value;
        fetch(`https://video-streaming-server-sigma.vercel.app/moviesByCategory/${categoryName}`)
        .then((res) => res.json())
        .then((data) => {
            setTvShows(data);
            console.log(data)
        });
        event.target.reset();
    }

    return (
        <div className='bg-fixed ' style={{ backgroundImage: `url(${bg})` }}>
            <section className="relative py- overflow-hidden  pt-10 sm:py-16 lg:py-24 xl:py-24">
                <div className=" text-center text-white py-10">
                    <h2 className="text-6xl font-bold ">Search your Favourite Tv Shows</h2>
                    <div className='flex justify-center items-center font-bold text-2xl mt-8'>
                        <a className='flex items-center justify-center mr-7   hover:text-red-600' href="/"><FaHome className='text-4xl  pr-4' />Home </a>
                        <FaCaretRight className='mr-3' />
                        <p className='text-red-600'>Tv Shows</p>
                    </div>
                </div>
            </section>


            <section className='bg-black py-16'>

                <div className=' w-[95%] mx-auto mt-10 mb-5 gap-3 flex flex-col md:flex-row lg:flex-row'>

                    <div className='gap-4 grid lg:w-[20%] md:w-[30%] sm:w-full '>
                        <div className='p-5'>
                            <div className="w-120 bg-slate-700 rounded-md shadow-lg p-2 mb-4 z-10">
                                <h2 className='text-2xl pb-1'>Search Tv Shows</h2>
                                <form onSubmit={searchField} className="flex items-center justify-center p-2">
                                    <input name="tvshowName" type="search" placeholder="Search here"
                                        className="w-full text-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
                                    <button type="submit"
                                        className="bg-red-600 text-white rounded-md px-4 py-1 ml-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                                        Search
                                    </button>
                                </form>


                            </div>
                            <div className="w-120 bg-slate-700 rounded-md shadow-lg p-2 z-10">
                                <h2 className='text-2xl pb-1'>Search Episodes</h2>
                                <form onSubmit={categoryField} className="flex items-center justify-center p-2">
                                    <input name="categoryName" type="search" placeholder="Search here"
                                        className="w-full text-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
                                    <button type="submit"
                                        className="bg-red-600 text-white rounded-md px-4 py-1 ml-2 hover:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                                        Search
                                    </button>
                                </form>



                            </div>

                            <div className='mt-5 font-semibold' >
                                <div className='bg-slate-700 p-2'>
                                    <p className='text-2xl font-bold mt-10'>
                                        Filter By Genre
                                    </p>
                                    <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                        <AiOutlineFolderOpen className='mt-1' /> <span className='ms-2'>Action</span>
                                    </div>
                                    <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                        <AiOutlineFolderOpen className='mt-1' /> <span className='ms-2'>Adventure</span>
                                    </div>
                                    <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                        <AiOutlineFolderOpen className='mt-1' /> <span className='ms-2'>Animation</span>
                                    </div>
                                    <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                        <AiOutlineFolderOpen className='mt-1' /> <span className='ms-2'>Drama</span>
                                    </div>
                                    <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                        <AiOutlineFolderOpen className='mt-1' /> <span className='ms-2'>Mystery</span>
                                    </div>
                                </div>

                                <div className='bg-slate-700 p-2 my-10'>
                                    <p className='text-2xl font-bold my-5'>
                                        Filter By Tags
                                    </p>
                                    <div className=''>
                                        <button className='bg-[#D71313] my-2 py-2 px-4  hover:bg-red-500 mr-2'>Brother</button>
                                        <button className='bg-[#D71313] my-2 py-2 px-4 hover:bg-red-500 mr-2'>Brother Relationship</button>
                                        <button className='bg-[#D71313] my-2 py-2 px-4 hover:bg-red-500 mr-2'>King</button>
                                        <button className='bg-[#D71313] my-2 py-2 px-4 hover:bg-red-500 mr-2'>Kings</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-[80%] md:w-[65%] sm:[100%]'>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                            {/* use sm MovieCard */}
                            {
                                tvShows?.map(tvshow => <MovieCard
                                    key={tvshow._id}
                                    movie={tvshow}
                                ></MovieCard>)

                            }
                        </div>
                    </div>


                </div>

            </section>

        </div>
    );
};

export default TvShows;






////////////////////////////////////////////////////////

