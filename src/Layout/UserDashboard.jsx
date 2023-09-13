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
                to="/userdashboard/library"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/library" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Library
              </Link>
              <Link
                to="/userdashboard/history"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/history" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> History
              </Link>
              <Link
                to="/userdashboard/likedvideos"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/likedvideos" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Liked Videos
              </Link>
              <Link
                to="/userdashboard/watchlater"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/watchlater" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Watch Later
              </Link>
              <Link
                to="/userdashboard/playlists"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/playlists" &&
                  "bg-gray-400/20 text-sky-600"
                }`}
              >
                <FaHistory className="inline-block" /> Play Lists
              </Link>
              <Link
                to="/userdashboard/account"
                className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                  pathname === "/userdashboard/account" &&
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
