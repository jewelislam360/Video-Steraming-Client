import React, { useEffect } from 'react';
import './Banner.css';
import { FaFacebook, FaTwitter, FaYoutube, FaPlay, FaRegWindowClose } from 'react-icons/fa'
import M from 'materialize-css';

import movieCard00 from '../../../../public/assets/images/banner/avenger-card.jpeg'
import movieCard01 from '../../../../public/assets/images/banner/Venom-card.webp'
import movieCard02 from '../../../../public/assets/images/banner/hobbit-card.jpg'
import movieCard03 from '../../../../public/assets/images/banner/immortals-card.jpg'
import movieCard04 from '../../../../public/assets/images/banner/Kung_Fu_Panda_card.jpg'
import movieCard05 from '../../../../public/assets/images/banner/pairets-card.jpeg'
import movieCard06 from '../../../../public/assets/images/banner/troy-carg.jpg'
import movieCard07 from '../../../../public/assets/images/banner/spaider-man-card.jpg'

const Banner = () => {
    useEffect(() => {
        // Initialize the Materialize Carousel
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            indicators: true,
            duration: 200,
        });
    }, []);

    const toggleVideo = () => {
        const trailer = document.querySelector('.trailer');
        const video = document.querySelector('video');
        video.pause();
        trailer.classList.toggle('active');

        if (video !== null) {
            video.pause();
        }
    }

    const changeBg = (bg, title) => {
        const banner = document.querySelector('.banner');
        const contents = document.querySelectorAll('.content');
        banner.style.backgroundImage = `url('../../../../public/assets/images/banner/${bg}')`;
        banner.style.backgroundSize = 'cover';
        banner.backgroundPosition = 'center';

        contents.forEach(content => {
            content.classList.remove('active');
            if (content.classList.contains(title)) {
                content.classList.add('active');
            }
        })
    }
    return (
        <>
            <div className='banner xl:w-[100%] lg:w-[100%] md:w-[50%] w-1/4'>
                <div className=' content avenger-title active'>
                    <img className='movie-title xl:w-[100%] lg:w-[100%] md:w-[50%] w-1/4'
                        src="../../../../public/assets/images/banner/avenger-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2023</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>12+</i></span>
                        <span>2h 14min</span>
                        <span>Romance</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content venom-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/venom-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2023</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>12+</i></span>
                        <span>2h 14min</span>
                        <span>Romance</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content hobit-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/hobit-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2020</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>17+</i></span>
                        <span>2h 14min</span>
                        <span>Adventure</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content immortals-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/immortals-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2018</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>21+</i></span>
                        <span>2h 14min</span>
                        <span>Action</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore facere exercitationem. Dolore, quasi deserunt!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content kum-fu-panda-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/kum-fu-panda-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2019</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>25+</i></span>
                        <span>3h 14min</span>
                        <span>Animation</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore facere exercitationem. Dolore, quasi deserunt!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content Pirates-of-The-Caribbean-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/Pirates-of-The-Caribbean-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2021</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>16+</i></span>
                        <span>2h 14min</span>
                        <span>Thiller</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem!</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content troy-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/troy-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2017</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>33+</i></span>
                        <span>2h 14min</span>
                        <span>History</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                <div className=' content spider-man-title'>
                    <img className='movie-title max-w-[250px]'
                        src="../../../../public/assets/images/banner/spider-man-title.png" alt="movie-title" />
                    <h4 className='text-gray-300 font-normal text-xl'>
                        <span>2013</span>
                        <span><i className=' bg-rose-500 text-white px-1 py-1 inline-block rounded-sm'>27+</i></span>
                        <span>2h 14min</span>
                        <span>Advanture</span>
                    </h4>
                    <p className=' text-xs font-light text-white leading-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?</p>
                    <div className='button flex'>
                        <a href="#" className='flex justify-start items-center'><FaPlay className='mr-1' />Watch Now</a>
                        <a href="#" onClick={() => toggleVideo()} className='flex justify-start items-center ml-4'><FaPlay className='mr-1' />Watch Trailer</a>
                    </div>
                </div>
                {/* ==========carousel=============== */}
                <div className='carousel-box relative min-w-[650px] flex justify-center items-center ml-4'>
                    <div className="carousel relative h-[380px]">
                        <div className="carousel-item"
                            onClick={() => changeBg('avenger.jpg', 'avenger-title')}>
                            <img src={movieCard00} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('venom.webp', 'venom-title')}>
                            <img src={movieCard01} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('hobbit.jpg', 'hobit-title')}>
                            <img src={movieCard02} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('immortal.jpg', 'immortals-title')}>

                            <img src={movieCard03} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('Kung-Fu-Panda.webp', 'kum-fu-panda-title')}>
                            <img src={movieCard04} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('pirates-of-the-caribbean.webp', 'Pirates-of-The-Caribbean-title')}>
                            <img src={movieCard05} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('troy.jpg', 'troy-title')}>
                            <img src={movieCard06} alt="" />
                        </div>
                        <div className="carousel-item"
                            onClick={() => changeBg('spider-man.jpg', 'spider-man-title')}>
                            <img src={movieCard07} alt="" />
                        </div>
                    </div>
                </div>
                <ul className='sociel absolute bottom-12 right-24 inline-flex justify-center items-center gap-6'>
                    <li><a href=""><FaFacebook /></a></li>
                    <li><a href=""><FaYoutube /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                </ul>
            </div>
            <div className='trailer fixed top-2/4 left-2/4 z-10 w-full h-full flex justify-center items-center backdrop:blur-xl'>
                <video src="../../../../public/assets/videos/pexels_videos_2629 (1080p).mp4"
                    muted
                    controls="true"
                    autoPlay="true"
                ></video>
                <FaRegWindowClose onClick={() => toggleVideo()} className='close absolute top-8 right-8 ' />
            </div>
        </>
    );
};

export default Banner;