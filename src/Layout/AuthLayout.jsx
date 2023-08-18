import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const AuthLayout = () => {
  const { pathname } = useLocation();
  let content = null;
  if (pathname === "/login") {
    content = <Login />;
  }
  if (pathname === "/register") {
    content = <Register />;
  }
  return (
    <>
      <div className="bg-gray-950 py-10 md:min-h-[70vh] flex items-center flex-col">
        <div className="bg-gray-950 pt-10 mb-6">
          <div className=" text-center flex justify-center gap-x-4">
            <Link
              to="/login"
              className={`text-2xl font-semibold  ${
                pathname === "/login" ? "text-red-600" : "text-white"
              }`}
            >
              Login
            </Link>

            <div className="border"></div>

            <Link
              to="/register"
              className={`text-2xl font-semibold  ${
                pathname === "/register" ? "text-red-600" : "text-white"
              }`}
            >
              Register
            </Link>
          </div>
        </div>
        <div className="border border-gray-700 p-6 mx-4 md:p-12 max-w-lg md:mx-auto ">
          {content}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
