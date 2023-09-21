import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../../redux/api/userApi";

const User = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess } = useCurrentUserQuery({
    email: user?.userEmail,
  });
  const {
    displayName,
    email: userEmail,
    emailVerified,
    phoneNumber,
    photoURL,
    address,
  } = data || {};
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(user?.userEmail);
  console.log("user line 21", data);
  return (
    <div className="flex flex-col md:flex-row pb-20 gap-x-16 justify-center px-4 md:px-0">
      <div className="text-center ">
        <img
          src={photoURL}
          className="w-48 h-44 rounded object-cover  mb-4"
          alt=""
        />
        <h1 className="text-xl ">{displayName} </h1>
        <p>{userEmail}</p>
      </div>
      <div>
        <h4 className="text-xl">General Information</h4>
        <p>
          By letting us know your name, we can make our support experience much
          more personal.
        </p>

        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 pb-[30px]  border-b-2 border-gray-500">
            <div>
              <label
                htmlFor="display_name"
                className="block mb-2 text-sm font-medium  "
              >
                Display name
              </label>
              <input
                type="text"
                id="display_name"
                className="cs-input w-full"
                placeholder="John Doe"
                value={displayName}
                {...register("display_name")}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium  "
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50/10  text-sm  focus:ring-blue-500  outline-none w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
                placeholder="Phone Number"
                value={phoneNumber}
                {...register("phone")}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium  "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="cs-input w-full"
                placeholder="Dhaka"
                value={address}
                {...register("address")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  "
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="cs-input w-full"
                placeholder="info@example.com"
                value={userEmail}
                {...register("email")}
                disabled
              />
            </div>
          </div>
          <div className="mt-7 pb-[30px]  border-b-2 border-gray-500">
            <h4 className="text-xl mb-4">Password Change</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 mb-6">
              <div>
                <label
                  htmlFor="newPass"
                  className="block mb-2 text-sm font-medium  "
                >
                  New Password:
                </label>
                <input
                  type="password"
                  id="newPass"
                  className="cs-input w-full"
                  placeholder="yyyyy"
                  {...register("newPass")}
                />
              </div>
              <div>
                <label
                  htmlFor="confPass"
                  className="block mb-2 text-sm font-medium  "
                >
                  Confirm password:
                </label>
                <input
                  type="password"
                  id="confPass"
                  className="cs-input w-full"
                  placeholder="yyyyy"
                  {...register("confPass")}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="cs-btn mt-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
