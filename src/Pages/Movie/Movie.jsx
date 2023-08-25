import React, { useEffect, useState } from 'react';
import MovieCard from '../Home/MovieCard/MovieCard';
import { AiOutlineFolderOpen } from "react-icons/ai";

const Movie = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, []);
    return (
        <>
            <section className="relative py- overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-24">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left brightness-50" src="https://i.ibb.co/mCLJHh1/home-banner.png" alt="" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-br md:block from-black to-transparent">

                </div>

                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-6">
                    <div className="text-center ">
                        <h2 className="text-3xl font-bold leading-tight sm:text-2xl lg:text-4xl">Search your Favourite Movie </h2>
                    </div>
                </div>
            </section>

            <section>

                <div className=' w-[95%] mx-auto mt-10 mb-5 gap-3 flex flex-col md:flex-row lg:flex-row'>
                    <div className='gap-4 grid lg:w-[30%] sm:w-[20%] '>
                        <div className='p-5'>
                            <form>
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-red-300 focus:ring-red-300 focus:border-ring-red-300 dark:text-white dark:focus:ring-red-300 dark:focus:border-ring-red-300" placeholder="Search..." required />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 ">Search</button>
                                </div>
                            </form>
                            <div className='mt-5 font-semibold' >
                                <p className='text-3xl font-semibold mt-10'>
                                Filter By Genre
                                </p>
                                <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                <AiOutlineFolderOpen className='mt-1'/> <span className='ms-2'>Action</span>
                                </div>
                                <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                <AiOutlineFolderOpen className='mt-1'/> <span className='ms-2'>Adventure</span>
                                </div>
                                <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                <AiOutlineFolderOpen className='mt-1'/> <span className='ms-2'>Animation</span>
                                </div>
                                <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                <AiOutlineFolderOpen className='mt-1'/> <span className='ms-2'>Drama</span>
                                </div>
                                <div className='flex cursor-pointer hover:text-red-600 mt-5'>
                                <AiOutlineFolderOpen className='mt-1'/> <span className='ms-2'>Mystery</span>
                                </div>

                                <div className='mt-8'>
                                <p className='text-3xl font-semibold mt-5'>
                                Filter By Tags
                                </p>
                                <div className='mt-5'>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 mr-1">4K Ultra</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 ms-1 mr-1">Brother</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 ms-1 mr-1">Dubbing</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 ms-1">Hero</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 mr-1 mt-2">King</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 ms-1 mr-1">Viking</button>
                                <button type="button" className="px-2 py-1 bg-red-700 hover:bg-red-900 ms-1 mr-1">K-Drama</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='lg:w-[80%] sm:[100%]'>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                            {
                                movies?.slice(0,4).map(movie => <MovieCard
                                    key={movie._id}
                                    movie={movie}
                                ></MovieCard>)

                            }
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};

export default Movie;