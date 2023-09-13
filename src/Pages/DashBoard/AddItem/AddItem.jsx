import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddItem = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // You can perform further actions with the form data here
    };
    return (
        <>
            <div className='mb-10 text-center'>
                --------------------------------------------
                <h2 className=' text-2xl font-extrabold'>Add Movies</h2>
                --------------------------------------------
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' w-full px-8'>
                <div className='flex justify-between'>
                    <div>
                        <label className=' text-xl font-bold'>Title :</label>
                        <input {...useForm('title')} className='w-full text-gray-700 my-2' />
                    </div>
                    <div>
                        <label className=' text-xl font-bold'>Thumbnail :</label>
                        <input {...useForm('thumbnailLink')} className='w-full  text-gray-700 mt-2' />
                    </div>
                    <div>
                        <label className=' text-xl font-bold'>Trailer :</label>
                        <input {...useForm('trailerLink')} className='w-full  text-gray-700 mt-2' />
                    </div>
                </div>


                <div className='my-4 flex justify-between'>
                    <div>
                        <label className=' text-xl font-bold'>Video Link :</label>
                        <input {...useForm('videoLink')} className='w-full text-gray-700 mt-2' />
                    </div>
                    <div>
                        <label className=' text-xl font-bold'>Ratings :</label>
                        <input {...useForm('rating')} className=' w-full text-gray-700 mt-2' />
                    </div>
                    <div>
                        <label className=' text-xl font-bold'>Duration :</label>
                        <input {...useForm('timeDuration')} className='w-full  text-gray-700 mt-2' />
                    </div>
                </div>

                <div>
                    <label className=' text-xl font-bold'>Description :</label>
                    <textarea {...useForm('description')} rows="3" className=' w-full  text-gray-700 my-2' />
                </div>

                <div className='flex gap-10'>
                    <div>
                        <label className=' text-xl font-bold'>Free or Paid :</label>
                        <Controller
                            name="payment"
                            control={control}
                            defaultValue="free"
                            render={({ field }) => (
                                <div>
                                    <input type="radio" {...field} value="free" /> Free
                                    <input type="radio" {...field} value="paid" className='ml-4' /> Paid
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <label className=' text-xl font-bold'>Category :</label>
                        <select {...useForm('category')} className=' text-gray-700 ml-4'>
                            <option value="movie">Action</option>
                            <option value="tv-show">Adventure</option>
                            <option value="movie">Drama</option>
                            <option value="tv-show">Animation</option>
                            <option value="tv-show">Mystery</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className='btn btn-outline mt-10 border-none text-white bg-red-700'>Add Item</button>
            </form>
        </>
    );
};

export default AddItem;