import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("/User.json")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    console.log(user)
    return (
        <div className='w-[80%] rounded-md bg-white'>
            <h1 className='text-xl text-black font-bold text-center'>User Informations</h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-xl">
                    <thead>
                        <tr className='text-black bg-red-700'>
                            <th>Name</th>
                            <th>email</th>
                            <th>Last Login</th>
                            <th>subscription</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            user.map(allUser => <tr key={allUser.name}>
                                <th>{allUser.name}</th>
                                <td>{allUser.email}</td>
                                <td>{allUser.last_login_time}</td>
                                <td>{allUser.subscription_plan}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;