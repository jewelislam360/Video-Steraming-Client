import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddTvShow = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // You can perform further actions with the form data here
        const {
            title,
            thumbnailLink,
            trailerLink,
            videoLink,
            timeDuration,
            description,
            category,
            status
        } = data;
        const addTvShow = {
            title,
            img: thumbnailLink,
            trailer: trailerLink,
            video: videoLink,
            time: timeDuration,
            description,
            category,
            status
        };
        fetch('http://localhost:5000/addTvShow', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addTvShow),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset();
                    console.log(data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item successfuly added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
        };
    return (
        <div className='container mx-auto p-4'>
            <div className='mb-6 text-center'>
               ---------------------------
               <h2 className='text-2xl font-extrabold text-orange-500'>Add Tv-Show</h2>
               ---------------------------
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                    <div>
                        <label className='text-xl font-bold'>Name:</label>
                        <input {...register('title')} className='w-full text-gray-700 my-2 border-2 border-gray-800' />
                    </div>
                    <div>
                        <label className='text-xl font-bold'>Thumbnail:</label>
                        <input {...register('thumbnailLink')} className='w-full text-gray-700 mt-2 border-2 border-gray-800' />
                    </div>
                    <div>
                        <label className='text-xl font-bold'>Trailer:</label>
                        <input {...register('trailerLink')} className='w-full text-gray-700 mt-2 border-2 border-gray-800' />
                    </div>
                </div>

                <div className='mb-4'>
                    <label className='text-xl font-bold'>Video Link:</label>
                    <input {...register('videoLink')} className='w-full text-gray-700 mt-2 border-2 border-gray-800' />
                </div>
                <div className='mb-4'>
                    <label className='text-xl font-bold'>Duration:</label>
                    <input {...register('timeDuration')} className='w-full text-gray-700 mt-2 border-2 border-gray-800' />
                </div>
                <div className='mb-4'>
                    <label className='text-xl font-bold'>Description:</label>
                    <textarea {...register('description')} rows="3" className='w-full text-gray-700 my-2 border-2 border-gray-800' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                    <div>
                        <label className='text-xl font-bold'>Category:</label>
                        <select {...register('category')} className='w-full text-gray-700 mt-2 border-2 border-gray-800'>
                            <option value="Action">NetFlix</option>
                            <option value="Adventure">Sony Tv</option>
                            <option value="Drama">Sport Tv</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-xl font-bold'>Status:</label>
                        <select {...register('status')} className='w-full text-gray-700 mt-2 border-2 border-gray-800'>
                            <option value="Free">Free</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className='btn btn-outline mt-4 border-none text-white bg-orange-700'>
                    Add Tv-Show
                </button>
            </form>
        </div>
    );
};

export default AddTvShow;