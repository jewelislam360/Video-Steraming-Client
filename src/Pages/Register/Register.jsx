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
    dispatch(createUserEmailPass(data));
  };
  return (
    <div className="min-w-[400px]">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="userNname"
          className="cs-input"
          placeholder="User Name"
          {...register("userName", { required: true })}
        />
        <input
          type="email"
          id="email"
          className="cs-input"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          id="password"
          className="cs-input"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <div>
          <button
            type="submit "
            className="cs-btn"
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
