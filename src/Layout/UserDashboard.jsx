import React from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import UserDashboardHome from "../Pages/User/UserDashboardHome";
import User from "../Pages/User/User";

const UserDashboard = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-x-6">
          <div className="col-span-1">
            <ul className="space-y-1 ">
              <Link
                to="/userDashboard/library"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/library" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Library
              </Link>
              <Link
                to="/userDashboard/history"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/history" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> History
              </Link>
              <Link
                to="/userDashboard/likedvideos"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/likedvideos" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Liked Videos
              </Link>
              <Link
                to="/userDashboard/watchlater"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/watchlater" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Watch Later
              </Link>
              <Link
                to="/userDashboard/playlists"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/playlists" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Play Lists
              </Link>
              <Link
                to="/userDashboard/account"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userDashboard/account" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaUser className="inline-block" /> Account
              </Link>
            </ul>
          </div>
          <div className="col-span-6 space-y-3">
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
