

import ReactPlayer from 'react-player'
import { useLoaderData } from 'react-router-dom';
import { FaImdb } from "react-icons/fa";

const ViewPlayer = () => {
    const movie = useLoaderData();
    const { title, video, like, img, trailer, description, category, time, rating } = movie;

    return (
        <div className='p-20'>


                <ReactPlayer className='react-player items-center' url={video} controls={true} light={img} width='75%' height='500px' />

                <div >
                    <h2 className='text-4xl font-bold'>{title}</h2>
                    <p className='text-xl'>{description}</p>
                 </div>
                 <div>
                    <p>{category}</p>
                    <p>{time}</p>
                    <p ><FaImdb className='text-yellow-600 text-4xl'></FaImdb>{rating}</p>
                    <p>{like}</p>
                 </div>

        </div>
    );
};

export default ViewPlayer;