import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SolialLogin from "../../components/SocialLog";
import { createUserEmailPass } from "../../redux/features/authSlice/authThunk";
import {
  errorEmty,
  setIsLoginSuccess,
} from "../../redux/features/authSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  //auth state import form store
  const { actionName, error, isLoginSuccess, isError } = useSelector(
    (state) => state.auth
  );
  //use form hook
  const { register, handleSubmit, reset } = useForm();
  //form submit handler
  const onSubmit = (data) => {
    dispatch(createUserEmailPass(data));
  };
  //error and success massage
  const err = () =>
    toast.error("Password or Email invalid!", {
      closeButton: false,
    });
  const success = () =>
    toast.success("User Registration successfully!", {
      closeButton: false,
    });

  //show toast if user created successfully
  if (
    actionName.includes("authSlice/createUserEmailPass/fulfilled") &&
    isLoginSuccess &&
    !isError
  ) {
    success();
    //empty isLoginSuccess state in store
    dispatch(setIsLoginSuccess());
    //reset form
    reset({ userName: "", email: "", password: "" });
  }

  //show error message if error aucord creating to a user
  if (
    actionName.includes("authSlice/createUserEmailPass/rejected") &&
    !isLoginSuccess &&
    isError
  ) {
    err();
    // empty error state in store
    dispatch(errorEmty());
    //reset form
    reset({ userName: "", email: "", password: "" });
  }
  return (
    <div className="min-w-[300px] md:min-w-[400px] ">
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
          <button type="submit " className="cs-btn">
            Register
          </button>
        </div>
      </form>
      <SolialLogin />
      <ToastContainer />
    </div>
  );
};

export default Register;
