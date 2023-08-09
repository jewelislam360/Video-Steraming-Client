import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="bg-gray-950 pt-10">
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
      <div className="bg-gray-950 py-10">
        <div className="border border-gray-700 p-12 max-w-lg mx-auto ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
