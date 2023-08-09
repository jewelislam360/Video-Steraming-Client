import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="min-w-[400px]">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="email"
            className="bg-gray-50/10  text-sm  focus:ring-blue-500  outline-none w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            id="password"
            className="bg-gray-50/10  text-sm  focus:ring-blue-500  outline-none w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <div>
            <button
              type="submit "
              className="px-4 w-full bg-red-600 py-[10px] rounded-[1px] text-white"
            >
              Login
            </button>
          </div>
        </form>
        <SocialLog />
      </div>
    </>
  );
};

export default Login;
