import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className='fixed top-0 left-0 w-full md:w-3/4 lg:w-1/2 xl:w-full text-white py-6 px-4 md:px-10 z-10'>
                <div className='flex justify-between items-center'>
                    <a href="#" className='font-extrabold text-4xl space-x-1'>mOvex</a>
                    <div className='md:hidden'>
                        {menuOpen ? (
                            <FaTimes onClick={toggleMenu} className='text-white text-2xl cursor-pointer' />
                        ) : (
                            <FaBars onClick={toggleMenu} className='text-white text-2xl cursor-pointer' />
                        )}
                    </div>
                    <div className={`hidden md:flex gap-4 ${menuOpen ? 'flex' : 'hidden'}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/tv-series'>TV Series</Link>
                        <Link to='/movies'>Movies</Link>
                    </div>
                    <div className='flex search relative w-[200px] md:w-[300px] h-[40px]'>
                        <input className='w-full h-full text-white bg-transparent border-b-2 rounded-lg pl-4' type="text" placeholder='Search' />
                        <FaSearch className='absolute top-2/4 -translate-y-2/4 right-3 text-white' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;



