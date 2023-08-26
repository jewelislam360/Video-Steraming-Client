import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUserCircle, FaHome, FaTasks, FaRegChartBar, FaRocket, FaRegStar, FaTv, FaThList, FaRegSun, FaSignOutAlt } from 'react-icons/fa'
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
            <div className="drawer-side px-8 bg-gray-400 text-white">
                <nav>
                    <div className="logo">
                        <FaUserCircle className='text-5xl'/>
                        <span>User Name</span>
                    </div>

                    <ul className="menu">
                        {/* Sidebar content here */}
                        <li><Link><FaHome className='icon'/><span className='nav-item'>User Home</span></Link></li>
                        <li><Link to="/dashboard/watchlist" className={`${pathname === "/dashboard/watchlist" ? "text-red-700" : "text-white"
                            }`}><FaTasks className='icon'/><span className='nav-item'>Watch List</span></Link></li>
                        <li><Link><FaRegChartBar className='icon'/><span className='nav-item'>Recent</span></Link></li>
                        <li><Link><FaRegStar className='icon'/><span className='nav-item'>Top Rated</span></Link></li>
                        <li><Link><FaRocket className='icon'/><span className='nav-item'>Download</span></Link></li>
                        <div className="divider"></div>

                        <li><Link><FaTv className='icon'/><span className='nav-item'>Tv-Show</span></Link></li>
                        <li><Link><FaThList className='icon'/><span className='nav-item'>Movie</span></Link></li>
                        <div className="divider"></div>

                        <li><Link to="/"><FaHome className='icon'/><span className='nav-item'>Home</span></Link></li>
                        <li><Link><FaRegSun className='icon'/><span className='nav-item'>Setting</span></Link></li>
                        <li className='logout'><Link><FaSignOutAlt className='icon'/><span className='nav-item'>Log Out</span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DashBoard;

