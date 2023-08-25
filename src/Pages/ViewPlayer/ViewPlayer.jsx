

import ReactPlayer from 'react-player'
import { useLoaderData } from 'react-router-dom';
import { FaFacebook, FaImdb, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineLike } from 'react-icons/ai';

const ViewPlayer = () => {
    const movie = useLoaderData();
    const { title, video, like, img, trailer, description, category, time, rating } = movie;


    return (
        <div className='p-20'>


            <div className=''>
                <ReactPlayer className='react-player mx-auto' url={video} controls={true} light={img} width='75%' height='500px' />
            </div>

            <div className='my-7'>
                <h2 className='text-6xl font-bold'>{title}</h2>
                <p className='text-3xl my-2'>{description}</p>

                <div className=' flex gap-5 text-3xl'>
                    <p className='font-semibold'>Genre : </p>
                    <p>{category}</p>
                </div>

                <div className=' flex gap-5 text-3xl my-2'>
                    <p className='font-semibold'>Run Time : </p>
                    <p>{time}</p>
                </div>

                <div className=' flex gap-5 text-3xl my-2'>
                    <p className='font-semibold'>Language : </p>
                    <p>English</p>
                </div>
                <div className=' flex gap-5 text-3xl my-2'>
                    <p className='font-semibold'>Subtitles : </p>
                    <p>English</p>
                </div>
                <div className=' flex gap-5 text-3xl my-2'>
                    <p className='font-semibold'>Audio Languages : </p>
                    <p>English</p>
                </div>

                <div className='flex text-3xl items-center gap-3'>
                    <span><FaImdb className='text-yellow-600'></FaImdb></span>
                    <span>{rating}</span>
                </div>
                <div className='md:flex justify-between'>
                    <div className='flex items-center text-3xl gap-3 '>
                        <p><AiOutlineLike></AiOutlineLike></p>
                        <p>{like}</p>
                    </div>

                    
                        <div className='flex gap-4 items-center'>
                            <p className='text-3xl font-semibold'>
                            Social Share :
                            </p>
                            <p className='flex gap-2 '><span className='p-3 hover:bg-red-600'><FaFacebook /></span><span className='p-3 hover:bg-red-600'><FaLinkedin /></span> <span className='p-3 hover:bg-red-600'><FaTwitter /></span></p>
                        </div>
                    

                </div>


            </div>
            <hr className='border-red-600 border-[2px]' />


            <div>
                {

                }
            </div>
        </div>


    );
};

export default ViewPlayer;