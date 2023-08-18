import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearch, FaBars } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const navOption = <>
        <li><a href="">Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Movies</summary>
                <ul className='p-2'>
                    <li><a>Action</a></li>
                    <li><a>Adventure</a></li>
                    <li><a>Commedy</a></li>
                    <li><a>Horror</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>Tv Series</summary>
                <ul className='p-2'>
                    <li><a>HD+</a></li>
                    <li><a>Sony</a></li>
                    <li><a>Sony Plus</a></li>
                    <li><a>Sports</a></li>
                </ul>
            </details>
        </li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar fixed top-0 left-0 w-full text-white py-6 px-4 md:px-10 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="text-gray-400 hover:text-gray-300 lg:hidden">
                    <FaBars size={24} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-full">
                        {navOption}
                    </ul>
                </div>
                <a className="font-extrabold text-3xl cursor-pointer">mOvex</a>
            </div>
            <div className="navbar-center hidden lg:flex md:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <button
                    onClick={toggleSearch}
                    className="text-gray-400 hover:text-gray-300"
                >
                    <FaSearch size={20} className='mr-1'/>
                </button>
                {searchVisible && (
                    <div className="hidden md:flex space-x-4 items-center">
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            className="py-1 px-2 rounded"
                        />
                    </div>
                )}
                <AiFillHeart size={24} className="text-gray-400 mr-1" />
                <a className="btn bg-red-600 btn-outline text-white">Login</a>
            </div>

        </div>
    );
};

export default Navbar;