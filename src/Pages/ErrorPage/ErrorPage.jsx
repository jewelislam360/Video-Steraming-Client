import { FaCaretRight, FaHome } from 'react-icons/fa';
import bgImg from "../ErrorPage/img/ErrorBgImg.jpg";

const ErrorPage = () => {
    return (
        <div  className="bg-fixed " style={{backgroundImage:`url(${bgImg})`}}>
            
            <div className=" text-center text-white py-10">
                <h2 className="text-6xl font-bold ">Page Not Found</h2>
                <div className='flex justify-center items-center font-bold text-2xl mt-8'>
                    <a className='flex items-center justify-center mr-7   hover:text-red-600' href="/"><FaHome className='text-4xl  pr-4' />Home </a>
                    <FaCaretRight className='mr-3' />
                    <p className='text-red-600'>Error 404</p>
                </div>
            </div>
            {/* buttom */}
            <div className="bg-black text-white">
                <div className="h-screen flex flex-col justify-center items-center">
                    <div>
                        <h1
                            className='text-9xl md:text-[300px] w-full select-none  text-center font-black  dark:text-[#373A40]  '>
                            404</h1>
                    </div>
                    <h1 className="text-4xl font-bold">404 Error</h1>
                    <p className="text-2xl font-medium py-4">Oops! This Page Not Found</p>
                    <a href="/" className="px-8 py-4 text-xl bg-red-600  hover:bg-red-500">BACK TO HOME</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

