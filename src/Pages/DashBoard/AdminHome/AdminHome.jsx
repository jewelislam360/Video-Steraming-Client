import React from 'react';
import { FaThLarge, FaRegCommentDots, FaRegStar, FaRedoAlt, FaUsers } from 'react-icons/fa'
import { useGetAllUserQuery } from '../../../redux/api/userApi';

const AdminHome = () => {
    const { data } = useGetAllUserQuery();
    return (
        <div className='container mx-auto p-4'>
            <div className='flex flex-col lg:flex-row gap-3 mb-10'>
                <div className="lg:w-1/3 h-40 bg-gray-800 text-orange-500 rounded-xl p-8 text-center">
                    <div>
                        <h1 className="text-2xl font-extrabold mb-4 text-cyan-50">Total User</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaRegCommentDots className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 h-40 bg-gray-800 text-orange-500 rounded-xl p-8 text-center">
                    <div>
                        <h1 className="text-2xl font-extrabold text-cyan-50 mb-4">Total Item Added</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaThLarge className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 h-40 bg-gray-800 text-orange-500 rounded-xl p-8 text-center">
                    <div>
                        <h1 className="text-2xl font-extrabold mb-4 text-cyan-50">Total Reviews</h1>
                        <div className='flex justify-around items-center'>
                            <h2 className='text-4xl font-extrabold'>205</h2>
                            <FaRegStar className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* *****************Data Table**********************/}
            <div className='lg:grid lg:grid-cols-2 gap-10 w-full p-8'>
                <div>
                    <div className='flex justify-between h-30 w-full px-8 pb-2'>
                        <span className='flex justify-center items-center gap-2'><FaThLarge className='text-2xl' />Top Items</span>
                        <span className='flex justify-center items-center gap-2'><FaRedoAlt className='text-2xl' />View All</span>
                    </div>
                    <div className="overflow-x-auto text-cyan-50 w-full ">
                        <table className="table table-xs w-full border-2 border-cyan-50">
                            <thead className='text-lg text-orange-500'>
                                <tr>
                                    <th>SI</th>
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
                        </table>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between h-30 w-full px-8 pb-2'>
                        <span className='flex justify-center items-center gap-2'><FaUsers className='text-2xl' />User Details</span>
                        <span className='flex justify-center items-center gap-2'><FaRedoAlt className='text-2xl' />View All</span>
                    </div>
                    <div className="overflow-x-auto text-cyan-50 w-full">
                        <table className="table table-xs w-full border-2 border-cyan-50">
                            <thead className='text-orange-500 text-lg'>
                                <tr>
                                    <th>SI</th>
                                    <td>Name</td>
                                    <td>Email Address</td>
                                    <td className='text-end'>Role</td>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.Name}</td>
                                        <td>{user.Email}</td>
                                        <td className='text-end'>{user.role === 'Admin' ? 'Admin' : 'User'}</td>
                                        <th></th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
