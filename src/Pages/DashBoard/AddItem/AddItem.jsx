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
            <h2 className=' text-2xl font-extrabold'>Add Item</h2>
            --------------------------------------------
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=' w-full px-8'>
                <label className=' text-xl font-bold'>Title :</label>
                <input {...useForm('title')} className=' w-full text-gray-700 px-4 my-2' />
                <label className=' text-xl font-bold'>Description :</label>
                <textarea {...useForm('description')} rows="3" className=' w-full  text-gray-700 my-2 px-4'/>
                <div>
                    <label className=' text-xl font-bold'>Video Link :</label>
                    <input {...useForm('videoLink')} className=' w-full text-gray-700 mt-2 px-4'/>
                </div>
                <div>
                    <label className=' text-xl font-bold'>Trailer :</label>
                    <input {...useForm('trailerLink')} className=' w-full text-gray-700 mt-2 px-4'/>
                </div>
                <div>
                    <label className=' text-xl font-bold'>Thaimnel :</label>
                    <input {...useForm('thambnelLink')} className=' w-full text-gray-700 mt-2 px-4'/>
                </div>
                <div className='my-4'>
                    <label className=' text-xl font-bold'>Category :</label>
                    <select {...useForm('category')} className=' text-gray-700 ml-4'>
                        <option value="movie">Action</option>
                        <option value="tv-show">Adventure</option>
                        <option value="movie">Drama</option>
                        <option value="tv-show">Animation</option>
                        <option value="tv-show">Mystery</option>
                    </select>
                </div>
                <div className='my-2'>
                    <label className=' text-xl font-bold'>Free or Paid :</label>
                    <Controller
                        name="payment"
                        control={control}
                        defaultValue="free"
                        render={({ field }) => (
                            <div>
                                <input type="radio" {...field} value="free" /> Free
                                <input type="radio" {...field} value="paid" className='ml-4'/> Paid
                            </div>
                        )}
                    />
                </div>
                


            <button type="submit" className='btn btn-outline mt-10 border-none text-white bg-red-700'>Submit</button>
        </form>
        </>
    );
};

export default AddItem;