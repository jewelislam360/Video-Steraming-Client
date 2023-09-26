import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { HiSun, HiOutlineMoon } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../redux/features/authSlice/authThunk";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useCurrentUserQuery, useGetAllUserQuery } from "../../../redux/api/userApi";
import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch();

  const { user, logOut } = useContext(AuthContext)
// TODO: This will be conditional
  const isAdmin=true;

  const { data, isSuccess } = useCurrentUserQuery({ email: user?.email })
  console.log(data);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
    setIsDarkTheme(!isDarkTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };



  // useEffect(()=>{
  //   fetch(`https://video-streaming-server-sigma.vercel.app/users/${user?.email}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setProfile(data)
  //   })
  // },[])
  const navOption = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <Link to="/movie">Movie</Link>
      </li>
      <li>
        <Link to='/tvshows'>Tv Shows</Link>
      </li>
      <li>

        <Link to="/contact">Contact</Link>

      </li>
      <li>
        {
          isAdmin? <>
          <Link to="/dashboard/adminhome">Dashboard</Link>
          </> : <>
          </>
        }
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gray-900 py-2 px-4 md:px-10 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="text-gray-400 hover:text-gray-300 lg:hidden"
          >
            <FaBars size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-full"
          >
            {navOption}
          </ul>
        </div>
        <Link to="/" className="font-extrabold text-3xl cursor-pointer text-orange-500">
          VidBox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {isDarkTheme ? (
          <HiSun
            onClick={toggleTheme}
            size={24}
            className=" mr-1 cursor-pointer text-white"
            id="icon"
          />
        ) : (
          <HiOutlineMoon
            onClick={toggleTheme}
            size={24}
            className=" mr-1 cursor-pointer text-orange-500"
            id="icon"
          />
        )}
        <button
          onClick={toggleSearch}
          className="text-gray-400 hover:text-gray-300"
        >
          <FaSearch size={20} className="mr-1 text-orange-500" />
        </button>
        {searchVisible && (
          <div className="flex lg:flex md:flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Search for movies..."
              className="py-1 px-2 rounded"
            />
          </div>
        )}

        {
          user ? <>
            <Link to='/userDashboard/account'>
            <img src={data?.photo} alt="" className="w-8 h-8 rounded-full"/>
            </Link>
            <button onClick={handleLogout} className="btn btn-ghost btn-sm text-orange-500">Logout</button>
          </> : <>
            <Link to="/login" className="btn btn-sm btn-outline border-none hover:bg-red-600 text-orange-500">Login</Link>
          </>
        }

      </div>
    </div>
  );
};

export default Navbar;
