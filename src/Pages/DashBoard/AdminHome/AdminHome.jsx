import React from 'react';
import { FaThLarge, FaRegCommentDots, FaRegStar, FaRedoAlt, FaUsers } from 'react-icons/fa'

const AdminHome = () => {
    return (
        <>
            <div className=' grid lg:grid-cols-3 gap-3 text-white'>
                <div className=" h-40 w-96 bg-slate-600 rounded-xl p-8 text-center ">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">Totall Item Added</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaThLarge className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className=" h-40 w-96 bg-slate-600 rounded-xl p-8 text-center">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">New Comments</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaRegCommentDots className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className=" h-40 w-96 bg-slate-600 rounded-xl p-8 text-center">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">New Reviews</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaRegStar className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* *****************Data Table**********************/}
            <div className=' grid lg:grid-cols-2 gap-4 w-full p-8'>
                <div>
                    <div className='flex justify-between border-cyan-50 border-b-2 h-30 w-full px-8 pb-2'>
                        <span className='flex justify-center items-center gap-2'><FaThLarge className='text-2xl' />Top Items</span>
                        <span className='flex justify-center items-center gap-2'><FaRedoAlt className='text-2xl' />View All</span>
                    </div>
                    <div className="overflow-x-auto text-gray-300 w-full">
                        <table className="table table-xs table-pin-rows table-pin-cols w-full">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <td>Title</td>
                                    <td>Category</td>
                                    <td>Rating</td>
                                    <td>Status</td>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>visible</td>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Zemlak, Daniel and Leannon</td>
                                    <td>visible</td>
                                    <th></th>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <td>Title</td>
                                    <td>Category</td>
                                    <td>Rating</td>
                                    <td>status</td>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between border-cyan-50 border-b-2 h-30 w-full px-8 pb-2'>
                        <span className='flex justify-center items-center gap-2'><FaUsers className='text-2xl' />User Details</span>
                        <span className='flex justify-center items-center gap-2'><FaRedoAlt className='text-2xl' />View All</span>
                    </div>
                    <div className="overflow-x-auto text-gray-300 w-full">
                        <table className="table table-xs table-pin-rows table-pin-cols w-full">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <td>Full Name</td>
                                    <td>Email</td>
                                    <td>User Name</td>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Zemlak, Daniel and Leannon</td>
                                    <th></th>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                <th>Id</th>
                                    <td>Full Name</td>
                                    <td>Email</td>
                                    <td>User Name</td>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;