import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const AuthLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* <div className="bg-gray-950 pt-10">
        <div className=" text-center flex justify-center gap-x-4">
          <Link
            to="/auth/login"
            className={`text-2xl font-semibold  ${
              pathname === "/auth/login" ? "text-red-600" : "text-white"
            }`}
          >
            Login
          </Link>

          <div className="border"></div>

          <Link
            to="/auth/register"
            className={`text-2xl font-semibold  ${
              pathname === "/auth/register" ? "text-red-600" : "text-white"
            }`}
          >
            Register
          </Link>
        </div>
      </div> */}
      <div className="bg-gray-950 py-10 md:min-h-[70vh] flex items-center flex-col">
        <div className="bg-gray-950 pt-10 mb-6">
          <div className=" text-center flex justify-center gap-x-4">
            <Link
              to="/auth/login"
              className={`text-2xl font-semibold  ${
                pathname === "/auth/login" ? "text-red-600" : "text-white"
              }`}
            >
              Login
            </Link>

            <div className="border"></div>

            <Link
              to="/auth/register"
              className={`text-2xl font-semibold  ${
                pathname === "/auth/register" ? "text-red-600" : "text-white"
              }`}
            >
              Register
            </Link>
          </div>
        </div>
        <div className="border border-gray-700 p-4 mx-4 md:p-12 max-w-lg md:mx-auto ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
