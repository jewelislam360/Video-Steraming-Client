import React from "react";
import { FaStudiovinari } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="shadow-md bg-green-700 top-0 left-0 w-full fixed z-[100001]">
      <div className="md:flex lg:flex py-4 justify-between max-w-screen-xl mx-auto">
        <div className="ml-6 lg:ml-0 font-bold text-2xl cursor-pointer flex items-center font[Poppins]">
          <div>
            <FaStudiovinari className="text-[#12f7ff] mr-1" />
          </div>
          <span className="text-xl">pHiro</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li tabIndex={0}>
              <details>
                <summary>Browse</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Home</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Movies</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>TV Shows</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered border-2 border-base-100 h-8 mr-2 md:w-auto w-36 lg:w-auto xl:w-auto"
          />
        </div>
        <a className="btn btn-sm btn-outline border-base-100 text-white border-2">
          Login
        </a>
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
