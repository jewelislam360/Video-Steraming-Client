import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUserCircle, FaHome,FaTasks,FaRegChartBar,FaRocket,FaRegStar,FaTv,FaThList,FaRegSun,FaSignOutAlt } from 'react-icons/fa'
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
            <div className="drawer-side px-4 bg-gray-400 text-white">
                <div className=" pt-4 w-1/2 mx-auto text-center">
                    <FaUserCircle className='text-5xl mx-auto'/>
                    <span>User Name</span>
                </div>
                <label htmlFor="my-drawer-2" className="drawer-overlay">Manu</label>
                <ul className="menu p-4 w-30 lg:w-60 h-ful">
                    {/* Sidebar content here */}
                    <li><Link><FaHome/>User Home</Link></li>
                    <li><Link to="/dashboard/watchlist" className={`${pathname === "/dashboard/watchlist" ? "text-red-700"  : "text-white"
                        }`}><FaTasks/>Watch List</Link></li>
                    <li><Link><FaRegChartBar/>Recent</Link></li>
                    <li><Link><FaRegStar/>Top Rated</Link></li>
                    <li><Link><FaRocket/>Download</Link></li>
                    <div className="divider"></div>
                    <h2>Category</h2>
                    <li><Link><FaTv/>Tv-Show</Link></li>
                    <li><Link><FaThList/>Movie</Link></li>
                    <div className="divider"></div>
                    <h2>General</h2>
                    <li><Link to="/"><FaHome/>Home</Link></li>
                    <li><Link><FaRegSun/>Settings</Link></li>
                    <li><Link><FaSignOutAlt/>Log Out</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;