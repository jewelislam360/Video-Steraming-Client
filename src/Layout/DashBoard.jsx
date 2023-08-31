import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUserCircle, FaHome, FaRegStar, FaRegCommentDots, FaTv, FaThList, FaSignOutAlt,FaListUl,FaUsers } from 'react-icons/fa'
import './DashBoard.css'

const DashBoard = () => {
    const { pathname } = useLocation()
    console.log(pathname);
    return (
        <div className="drawer drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side px-8 bg-gray-500">
                <nav>
                    <div className="logo  flex justify-start items-center">
                        <FaUserCircle className='text-5xl' />
                        <span>Admin <br /> Name Here</span>
                    </div>

                    <ul className="menu">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard/adminhome"
                            className={`${pathname === "/dashboard/adminhome" ? "text-red-800" : "text-white"
                                }`}>
                            <FaHome className='icon' />
                            <span className='nav-item'>Dashboard</span>
                        </Link></li>
                        <li><Link to="/dashboard/additem"
                            className={`${pathname === "/dashboard/additem" ? "text-red-800" : "text-white"
                                }`}>
                                    <FaListUl className='icon' />
                                    <span className='nav-item'>Add Item</span>
                                </Link></li>
                        <li><Link><FaUsers className='icon' /><span className='nav-item'>Users</span></Link></li>
                        <li><Link><FaRegStar className='icon' /><span className='nav-item'>Reviews</span></Link></li>
                        <li><Link><FaRegCommentDots className='icon' /><span className='nav-item'>Comments</span></Link></li>
                        <div className="divider"></div>

                        <li><Link><FaTv className='icon' /><span className='nav-item'>Tv-Show</span></Link></li>
                        <li><Link><FaThList className='icon' /><span className='nav-item'>Movie</span></Link></li>
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

