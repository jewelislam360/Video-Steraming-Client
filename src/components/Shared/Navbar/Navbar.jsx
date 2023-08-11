import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOption= <>
    <li><a> Home</a></li>
    <li><a>Movies</a></li>
    <li><a>Tv series</a></li>
    </>
    
    return (
        <div>
            <div className="navbar fixed top-0 z-50 text-white    bg-slate-900/60 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-red-700 font-bold text-xl">VIDBOX</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="px-4 bg-red-600 py-[10px] rounded-[1px] text-white">Login</Link>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;
















// import React, { useState} from 'react';
// import { FaStudiovinari, FaRegWindowClose, FaBars} from 'react-icons/fa';

// const Navbar = () => {
//     const [open, setOpen]=useState(false);

//     const Links=[
//         {name:"Home", link:"/"},
//         {name:"About", link:"/"},
//         {name:"Service", link:"/"},
//         {name:"Blogs", link:"/"},
//         {name:"Contact", link:"/"},
//     ]
//     return (
//        <div className=' shadow-md top-0 left-0 w-full fixed z-[10] bg-gray-500'>
//         <div className='md:flex lg:flex py-4 justify-between'>
//             <div className='ml-6 lg:ml-0 font-bold text-2xl cursor-pointer flex items-center font[Poppins]'>
//                 <span className='text-3xl text-[#12f7ff] mr-1 pt-2'>
//                 <FaStudiovinari/>
//                 </span>
//                 pHero
//             </div>
//             <div onClick={()=>setOpen(!open)} id='manu-icon' className=' absolute right-6 top-6 cursor-pointer lg:hidden md:hidden'>
//                 {open ? 
//                 <FaRegWindowClose />
//                 :
//                 <FaBars/>
//                 }
            
//             </div>
//             <ul className={`md:flex md:items-center lg:flex lg:justify-end md:pb-0 pb-0 pt-4 absolute md:static w-full left-0 md:pl-0 pl-4 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-480px]'}`}>
//                 {
//                     Links.map((link)=>(
//                         <li key={link.name} className='md:ml-8 text-xl pb-4'>
//                             <a href={link.link} className='hover duration-500'>{link.name}</a>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//        </div>
//     );
// };

// export default Navbar;
