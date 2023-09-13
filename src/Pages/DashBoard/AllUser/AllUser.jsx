import React from 'react';
import { useGetAllUserQuery } from '../../../redux/api/userApi';
import Swal from 'sweetalert2';

const AllUser = () => {
    const { data } = useGetAllUserQuery()
    
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
        <div className="overflow-x-auto text-gray-300 w-full px-10">
            <table className="table table-xs  ">
                <thead className='text-gray-300 text-xl'>
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
                            <td className=' text-end'>Admin</td>
                            <td className=' text-end'><button onClick={() => handleDelete(user)} className='btn btn-sm'>Delete</button></td>
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