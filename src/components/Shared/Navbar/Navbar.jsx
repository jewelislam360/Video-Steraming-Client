import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../redux/features/authSlice/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import {
  useCurrentUserQuery,
  useGetAllUserQuery,
} from "../../../redux/api/userApi";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const { data, isSuccess } = useCurrentUserQuery({ email: user?.email });
  const isAdmin = true;
  console.log(data);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  const dashboardRouteHandler = () => {
    if (isAdmin) {
      navigate("/dashboard/adminhome");
    } else {
      navigate("/userdashboard/library");
    }
  };

  const navOption = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <Link to="/movie">Movie</Link>
      </li>
      <li>
        <Link to="tvSeries">Tv Series</Link>
      </li>
      <li>
        <Link to="/tvshows">Tv Shows</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/dashboard/adminhome">Dashboard</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 left-0 w-full text-white py-6 px-4 md:px-10 z-10">
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
        <Link to="/" className="font-extrabold text-3xl cursor-pointer">
          VidBox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleSearch}
          className="text-gray-400 hover:text-gray-300"
        >
          <FaSearch size={20} className="mr-1" />
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

        {user ? (
          <>
            <span onClick={dashboardRouteHandler}>
              <img src={data?.PhotoURL} alt="" className="w-[30px] rounded-full" />
            </span>
            <button onClick={handleLogout} className="btn btn-ghost btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <span>
              <FaUserCircle
                size={24}
                className="text-gray-400 mr-1 cursor-pointer"
              />
            </span>
            <Link
              to="/login"
              className="btn btn-sm btn-outline border-none hover:bg-red-600 text-white"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
