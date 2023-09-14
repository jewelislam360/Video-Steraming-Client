import React from 'react';
import { useGetAllUserQuery } from '../../../redux/api/userApi';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUser = () => {
    const { data, refetch } = useGetAllUserQuery()

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
        console.log(user._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto text-cyan-50 w-full px-10 text-center">
            --------------------------------------------
            <h2 className=' text-2xl font-extrabold text-orange-500'>All User</h2>
            --------------------------------------------
            <table className="table table-xs  border-2 my-10">
                <thead className='text-xl text-orange-500'>
                    <tr>
                        <th>SI</th>
                        <td>Name</td>
                        <td>Email Address</td>
                        <td className=' text-end'>Role</td>
                        <td className=' text-end'>Action</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td className=' text-end'>{user.role === 'Admin' ? 'Admin' :
                                <button onClick={() => handleMakeAdmin(user)} className='btn btn-sm bg-orange-700 hover:bg-red-700 text-white border-0'><FaUsers></FaUsers></button>
                            }</td>
                            <td className=' text-end'><button onClick={() => handleDelete(user)} className='btn btn-sm text-white  bg-orange-700 hover:bg-red-700 border-0'><FaTrashAlt></FaTrashAlt></button></td>
                            <th></th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;