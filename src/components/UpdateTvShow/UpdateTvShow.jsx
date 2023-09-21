import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';



const UpdateTvShow = () => {

    const movie = useLoaderData();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // You can perform further actions with the form data here
        const {
            title,
            thumbnailLink,
            trailerLink,
            videoLink,
            rating,
            timeDuration,
            description,
            category,
            liked,
            status
        } = data;
        const addmovie = {
            title,
            img: thumbnailLink,
            trailer: trailerLink,
            video: videoLink,
            rating: parseFloat(rating),
            time: timeDuration,
            description,
            category,
            like: parseFloat(liked),
            status
        };
        fetch('https://video-streaming-server-sigma.vercel.app/addMovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addmovie),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset();
                    console.log(data);
                }
            });
    };

    return (
        <div>
            <h2>Update a Movie </h2>
            <div className='container mx-auto p-4'>
                <div className='mb-6 text-center'>
                    ---------------------------
                    <h2 className='text-2xl font-extrabold text-orange-500'>Add Movies</h2>
                    ---------------------------
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                        <div>
                            <label className='text-xl font-bold'>Name:</label>
                            <input {...register('title')} className='w-full text-gray-700 my-2' />
                        </div>
                        <div>
                            <label className='text-xl font-bold'>Thumbnail:</label>
                            <input {...register('thumbnailLink')} className='w-full text-gray-700 mt-2' />
                        </div>
                        <div>
                            <label className='text-xl font-bold'>Trailer:</label>
                            <input {...register('trailerLink')} className='w-full text-gray-700 mt-2' />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className='text-xl font-bold'>Video Link:</label>
                        <input {...register('videoLink')} className='w-full text-gray-700 mt-2' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl font-bold'>Ratings:</label>
                        <input {...register('rating')} className='w-full text-gray-700 mt-2' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl font-bold'>Duration:</label>
                        <input {...register('timeDuration')} className='w-full text-gray-700 mt-2' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl font-bold'>Description:</label>
                        <textarea {...register('description')} rows="3" className='w-full text-gray-700 my-2' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                        <div>
                            <label className='text-xl font-bold'>Category:</label>
                            <select {...register('category')} className='w-full text-gray-700 mt-2'>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Drama">Drama</option>
                                <option value="Animation">Animation</option>
                                <option value="Mystery">Mystery</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-xl font-bold'>Status:</label>
                            <select {...register('status')} className='w-full text-gray-700 mt-2'>
                                <option value="Free">Free</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-xl font-bold'>Like:</label>
                            <input {...register('liked')} className='w-full text-gray-700 mt-2' />
                        </div>
                    </div>

                    <button type="submit" className='btn btn-outline mt-4 border-none text-white bg-red-700'>
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTvShow;