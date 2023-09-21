import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUserCircle, FaHome, FaRegStar, FaRegCommentDots, FaTv, FaThList, FaSignOutAlt, FaListUl, FaUsers } from 'react-icons/fa'
import './DashBoard.css'
import { useCurrentUserQuery, useGetAllUserQuery } from '../redux/api/userApi';
import { AuthContext } from '../Provider/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { data, isSuccess } = useCurrentUserQuery({ email: user?.email })
    console.log(data);

    const { pathname } = useLocation()

    // TODO: get data from server side for dynamic
    const isAdmin = true;


    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side px-8 bg-gray-800">
                <nav>
                    <div className="logo  flex justify-start items-center">
                        <img src={data?.photo} alt="" className="w-12 h-12 rounded-full" />
                        <span>Admin <br />{data?.Name}</span>
                    </div>

                    <ul className="menu">
                        {
                            isAdmin ? <>
                                <li><Link to="/dashboard/adminhome"
                                    className={`${pathname === "/dashboard/adminhome" ? "text-cyan-50" : "text-orange-500"
                                        }`}>
                                    <FaHome className='icon' />
                                    <span className='nav-item'>Dashboard</span>
                                </Link></li>
                                <li><Link to="/dashboard/alluser"
                                    className={`${pathname === "/dashboard/alluser" ? "text-cyan-50" : "text-orange-500"
                                        }`}>
                                    <FaUsers className='icon' />
                                    <span className='nav-item'>Manage User</span></Link></li>
                                <li><Link to="/dashboard/additem"
                                    className={`${pathname === "/dashboard/additem" ? "text-cyan-50" : "text-orange-500"
                                        }`}>
                                    <FaListUl className='icon' />
                                    <span className='nav-item'>Add Item</span>
                                </Link></li>
                                <li><Link to="/dashboard/addTvShow"
                                    className={`${pathname === "/dashboard/addTvShow" ? "text-cyan-50" : "text-orange-500"
                                        }`}>
                                    <FaThList className='icon' />
                                    <span className='nav-item'>Add Tv-Show</span>
                                </Link></li>

                                <li><Link><FaRegStar className='icon' /><span className='nav-item'>Reviews</span></Link></li>
                                <li><Link><FaRegCommentDots className='icon' /><span className='nav-item'>Comments</span></Link></li>
                            </> : <>

                                <li><Link to="/dashboard/userhome"
                                    className={`${pathname === "/dashboard/userhome" ? "text-red-800" : "text-white"
                                        }`}>
                                    <FaHome className='icon' />
                                    <span className='nav-item'>Dashboard</span>
                                </Link></li>
                                <li><Link><FaUsers className='icon' /><span className='nav-item'>My Cart</span></Link></li>
                                <li><Link><FaRegStar className='icon' /><span className='nav-item'>Histroy</span></Link></li>
                                <li><Link><FaRegCommentDots className='icon' /><span className='nav-item'>Comments</span></Link></li>
                            </>
                        }

                        <div className="divider"></div>

                        <li><Link to="/dashboard/manageTvShow" 
                        className={`${pathname === "/dashboard/manageTvShow" ? "text-cyan-50" : "text-orange-500"
                            }`}><FaTv className='icon' /><span className='nav-item'>Tv-Show</span></Link></li>

                        <li><Link to="/dashboard/movieList"
                            className={`${pathname === "/dashboard/additem" ? "text-cyan-50" : "text-orange-500"
                                }`}
                        ><FaThList className='icon' /><span className='nav-item'>Movie</span></Link></li>
                        <div className="divider"></div>

                        <li><Link to="/"><FaHome className='icon' /><span className='nav-item'>Home</span></Link></li>
                        <li><Link><FaSignOutAlt className='icon' /><span className='nav-item'>Log Out</span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DashBoard;

