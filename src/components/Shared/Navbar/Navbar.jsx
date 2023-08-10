import React from 'react';
import {FaStudiovinari} from 'react-icons/fa'
 
const Navbar = () => {
    return (
        <>
            <div className="shadow-md top-0 left-0 w-full fixed z-[100001]">
                <div className="md:flex lg:flex py-4 justify-between max-w-screen-xl mx-auto">
                    <div className="ml-6 lg:ml-0 font-bold text-2xl cursor-pointer flex items-center font[Poppins]">
                        <div>
                        <FaStudiovinari className='text-[#12f7ff] mr-1'/>
                        </div>
                        <span className="text-xl">pHiro</span>
                    </div>
                    <div className="">
                        <a className="btn btn-sm btn-outline hover">Login</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;