import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SolialLogin from "../../components/SocialLog";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // dispatch(loginEmailPass(data));
  };
  return (
    <>
      <div className="md:min-w-[400px]">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="email"
            className="cs-input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <div>
            <input
              type="password"
              id="password"
              className="cs-input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <p className="text-[12px] cursor-pointer mt-2 text-red-600">Forgot Password</p>
          </div>
          <button
            type="submit "
            className="cs-btn"
          >
            Login
          </button>
        </form>
        <SolialLogin />
      </div>
    </>
  );
};

export default Login;
