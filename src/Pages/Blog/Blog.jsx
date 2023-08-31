
import { Link } from 'react-router-dom';
import { FaCaretRight, FaHome } from 'react-icons/fa';
import bgImg from "../../Pages/ErrorPage/img/ErrorBgImg.jpg";
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const BlogData = [
            {
                "id": 1,
                "name": "Example Blog Post 1",
                "img": "https://i.ibb.co/rM7WkMx/7-1.jpg",
                "admin": "John Doe",
                "date": "2023-08-21",
                "category": "Technology",
                "description": "This is an example blog post about technology.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.",
                "tags": ["tech", "coding"]
            },
            {
                "id": 2,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/KXx7btF/211.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 3,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/M6LGzQ1/5.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 4,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/xgh12Dt/3.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 5,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/tYmjydx/10-2.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 6,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/BVkcMwq/42.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 7,
                "name": "Example Blog Post 2",
                "img": "https://i.ibb.co/gz0FhLN/8.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            },
            {
                "id": 8,
                "name": "Example Blog Post 2",
                "img": "https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2019/02/4-2.jpg",
                "admin": "Jane Smith",
                "date": "2023-08-22",
                "category": "Travel",
                "description": "This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.This is an example blog post about travel.",
                "tags": ["travel", "adventure"]
            }
        ];

        setBlogPosts(BlogData);
    }, []);

    return (
        <div className="bg-fixed " style={{ backgroundImage: `url(${bgImg})` }}>
            {/* Top */}
            <section className="relative py- overflow-hidden  pt-10 sm:py-16 lg:py-24 xl:py-24">
                <div className=" text-center text-white py-10">
                    <h2 className="text-6xl font-bold ">Blog page</h2>
                    <div className='flex justify-center items-center font-bold text-2xl mt-8'>
                        <a className='flex items-center justify-center mr-7   hover:text-red-600' href="/"><FaHome className='text-4xl  pr-4' />Home </a>
                        <FaCaretRight className='mr-3' />
                        <p className='text-red-600'>Blog</p>
                    </div>
                </div>
            </section>

            {/* bottom */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto bg-[#161616] py-10 px-3 ">
                {/* 1 card */}
                {blogPosts.map((blogPost) => (
                    <div className="bg-[#221f1f] text-white sm:w-full md:w-full overflow-hidden pb-5" key={blogPost.id}>
                        <div className="pb-5 hover:scale-110 hover:duration-300 transition-all ease-out "><img src={blogPost.img} alt="" /></div>
                        <div className="p-5">
                            <div className="pb-5">
                                <ul className="flex gap-4 font-bold ">
                                    <li>{blogPost.admin}</li>
                                    <li className="hover:text-[#D71313]">{blogPost?.date}</li>
                                    <li className="hover:text-[#D71313]">{blogPost.category}</li>
                                </ul>
                            </div>
                            <h2 className="text-4xl pb-5 hover:text-[#D71313]">{blogPost.name}</h2>
                            <p className="pb-5">{blogPost.description.length < 50 ? <> {blogPost.description}</> : <>{blogPost.description.slice(0, 50)}... <Link to={"/blog"}><button className="text-2xl bg-[#D71313] hover:bg-[#520d06] py-2 mt-10 px-4">Read More</button></Link></>}</p>

                            {/* <p className="pb-5">{blogPost.description.length < 50 ? <> {blogPost.description}</> : <>{blogPost.description.slice(0,50)}... <Link to={`/blog/${blogPost.id}`}><button className="text-2xl bg-[#D71313] hover:bg-[#520d06] py-2 mt-10 px-4">Read More</button></Link></>}</p> */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Blog;
