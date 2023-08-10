
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import movies from "../Footer/imgs/movies-1.jpg";
import movies2 from "../Footer/imgs/movies-2.jpg"
import movies3 from "../Footer/imgs/movies-2.jpg"


const Footer = () => {
    return (
        // footer
        <footer className="bg-gray-900  text-white max-w-screen-xl">
            <div className="">
                <div className="grid grid-cols-12 gap-8 mx-5 py-10">
                    {/* left side */}
                    <div className="col-span-12 md:col-span-4">
                        <a href="/" className="text-6xl font-bold pb-8">Netfliexy</a>
                        <p className="pt-10">Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.</p>
                        <div className='flex mt-8 text-4xl'>

                            <Link to="/#"><FaTwitter className=' mr-4 hover:text-white  text-sky-600' /></Link>
                            <Link to="/#"><FaFacebook className=' mr-4 hover:text-white  text-blue-600' /></Link>
                            <Link to="/#"><FaWhatsapp className=' mr-4 hover:text-white  text-lime-600' /></Link>
                            <Link to="/#"><FaInstagram className=' mr-4 hover:text-white  text-red-600' /></Link>
                        </div>
                    </div>
                    {/* right side */}
                    <div className=" md:col-span-8 mx-4">
                        <div className="col-span-12 text-2xl font-bold flex flex-wrap mb-8  ">
                            <a href="#" className=" hover:text-red-600 mr-6">Action</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Comedy</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Drama</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Kids Shows</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Music & concerts</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Family Movies</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Horror</a>
                            <a href="#" className=" hover:text-red-600  mr-6">Classics</a>
                        </div>
                        <div className="col-span-12 ">
                            <div className="flex  justify-between gap-5 mb-8 space-x-16 ">
                                <img className="w-[200px] h-[100px] border-2 border-red-600 transform transition duration-500 hover:scale-110 " src={movies} alt="Movies" />
                                <img className="w-[200px] h-[100px] border-2 border-red-600 transform transition duration-500 hover:scale-110 " src={movies2} alt="Movies" />
                                <img className="w-[200px] h-[100px] border-2 border-red-600 transform transition duration-500 hover:scale-110 " src={movies3} alt="Movies" />
                                <img className="w-[200px] h-[100px] border-2 border-red-600 transform transition duration-500 hover:scale-110 " src={movies3} alt="Movies" />
                            </div>
                        </div>
                        <div className="col-span-12 text-xl  mb-8 ">
                            <a href="#" className=" hover:text-red-600 pr-3  border-r-2">Report a Bug</a>
                            <a href="#" className=" hover:text-red-600 pr-3 border-r-2">Request a Feature</a>
                            <a href="#" className=" hover:text-red-600  pr-3 border-r-2">Content Grievance</a>
                            <a href="#" className=" hover:text-red-600  pr-3 border-r-2">Movie Request</a>
                            <a href="#" className=" hover:text-red-600  pr-3 border-r-2">Submit Your Story</a>
                            <a href="#" className=" hover:text-red-600  pr-3 border-r-2">Privacy Policy</a>
                            <a href="#" className=" hover:text-red-600  pr-3 border-r-2">Terms of Services</a>
                            <a href="#" className=" hover:text-red-600  pr-3 ">Support</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom */}
            <hr className="text-base-300 shadow-sm" />
            <div class="text-center flex flex-col justify-between items-center mx-5 py-10 md:flex-row md:items-center md:justify-between">
                <div class="order-2 md:order-1 md:mb-10">
                    <h2>
                        Copyright ©2022 All rights reserved
                    </h2>
                </div>
                <div class="order-1 pb-4 md:order-2 md:mt-10 flex flex-col gap-10 md:flex-row md:items-center">
                    <p class="text-xl">
                        Already have an Account? <a class="hover:text-red-600" href="/">Login</a>
                    </p>
                    <a href="/">
                        <button class="btn btn-outline font-bold text-xl btn-secondary md:ml-10">Become a Member</button>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
