import React from "react";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-gray-950 pt-10">
        <div className=" text-center flex justify-center gap-x-4">
          <NavLink
            to="/login/log"
            className={({ isActive, isPending }) => {
              return isActive
                ? "text-red-500"
                : isPending
                ? "text-white"
                : " text-2xl font-semibold text-red-600";
            }}
          >
            Login
          </NavLink>
          <div className="border"></div>
          <NavLink
            to="/login/register"
            className={({ isActive, isPending }) => {
              return isActive
                ? "text-red-500"
                : isPending
                ? "text-white"
                : "text-white text-2xl font-semibold ";
            }}
          >
            Register
          </NavLink>
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
