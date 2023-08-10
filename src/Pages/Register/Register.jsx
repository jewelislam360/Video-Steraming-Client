import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SolialLogin from "../../components/SocialLog";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth,"hallo");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // dispatch(createUserEmailPass(data));
  };
  return (
    <div className="min-w-[400px]">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="userNname"
          className="bg-gray-50/10  text-sm  focus:ring-blue-500  outline-none w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
          placeholder="User Name"
          {...register("userName", { required: true })}
        />
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
            Register
          </button>
        </div>
      </form>
      <SolialLogin />
    </div>
  );
};

export default Register;
