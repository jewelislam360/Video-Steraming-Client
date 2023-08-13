import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaPlay, FaSearch, FaLongArrowAltRight, FaLongArrowAltLeft, FaRegWindowClose } from 'react-icons/fa'
import M from 'materialize-css';

import banner01 from '../../../../public/assets/images/banner/banner02.jpg'

import movieCard01 from '../../../../public/assets/images/banner/banner card.jpg'
import movieCard02 from '../../../../public/assets/images/banner/movie card01.jpg'
import movieCard03 from '../../../../public/assets/images/banner/movie card02.jpg'
import movieCard04 from '../../../../public/assets/images/banner/movie card03.jpg'
import movieCard05 from '../../../../public/assets/images/banner/movie card04.jpg'


const NavBar = () => {
    useEffect(() => {
        // Initialize the Materialize Carousel
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
          indicators: true,
          duration: 200,
        });
      }, []);

    return (
        <>
            <header className=' absolute top-0 left-0 w-full flex justify-between items-center text-white py-6 px-10 z-10'>
                <a href="#" className=' font-extrabold text-4xl space-x-1'>mOvex</a>
                <ul className='flex'>
                    <Link><li>Home</li></Link>
                    <Link><li>Adults</li></Link>
                    <Link><li>Kids</li></Link>
                    <Link><li>Trand</li></Link>
                    <Link><li>My Collection</li></Link>
                </ul>
                <div className='flex search relative w-[300px] h-[40px]'>
                    <input className=' absolute left-0 top-0 w-[100%] h-[100%] text-white bg-transparent border-b-2 rounded-lg pl-4' type="text" placeholder='Search' />
                    <FaSearch className='absolute top-2/4 -translate-y-2/4 right-3 text-white' />
                </div>
            </header>
            <div className='banner relative w-full min-h-screen px-10 py-24 flex justify-between items-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `URL(${banner01})` }}>
                <div className=' content active relative max-w-xl hidden '>
                    <img className=' max-w-[250px]' src="../../../../public/assets/images/banner/banner001-removebg-preview.png" alt="" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2023</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>12+</i></span>
                        <span>2h 14min</span>
                        <span>Romance</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch</a>
                        <a href="#" className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />My Lists</a>
                    </div>
                </div>
                <div className='carousel-box relative min-w-[650px] flex justify-center items-center'>
                    <div className="carousel relative h-[380px]">
                        <div className="carousel-item">
                            <img src={movieCard01} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={movieCard02} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={movieCard03} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={movieCard04} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={movieCard05} alt="" />
                        </div>
                    </div>
                </div>
                <a href="#" className='play absolute bottom-12 left-24 inline-flex justify-start items-center text-white font-medium text-sm'><FaPlay className=' mr-2 text-3xl' /> Watch Trailer</a>
                <ul className='sociel absolute bottom-12 right-24 inline-flex justify-center items-center gap-6'>
                    <li><a href=""><FaFacebook /></a></li>
                    <li><a href=""><FaYoutube /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                </ul>
            </div>
            {/* <div className='trailer fixed top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50% z-10 w-full h-full flex justify-center items-center backdrop:blur-xl]'>
                <video src="https://www.youtube.com/watch?v=UDgjJ9XzgHk"
                 muted 
                 controls="true"
                 autoPlay="true"
                 ></video>
                 <FaRegWindowClose/>
            </div> */}
        </>
    );
};

export default NavBar;
