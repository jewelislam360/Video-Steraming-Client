import React, { useState } from "react";
import { useForm } from "react-hook-form";

const User = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col md:flex-row pb-20 pt-28 gap-x-16 justify-center px-4 md:px-0">
      <div className="text-center ">
        <img
          src="/emon4.jpg"
          className="w-48 h-44 rounded object-cover  mb-4"
          alt=""
        />
        <h1 className="text-xl ">Hallo Dear </h1>
        <p>emon@gmail.com</p>
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
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium  "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50/10  text-sm  focus:ring-blue-500  outline-none w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
                placeholder="John"
                {...register("first_name")}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium  "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="cs-input w-full"
                placeholder="Doe"
                {...register("last_name")}
              />
            </div>
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
                {...register("display_name")}
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
