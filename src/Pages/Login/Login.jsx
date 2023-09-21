import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SolialLogin from "../../components/SocialLog";
import {
  errorEmty,
  setIsLoginSuccess,
} from "../../redux/features/authSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  loginEmailPass,
  sendForgotEmail,
} from "../../redux/features/authSlice/authThunk";
import { useLoginMutation } from "../../redux/api/userApi";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();

  const from=location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  //get auth state from redux store
  const { actionName, isError, isLoginSuccess, loading, user } = useSelector(
    (state) => state.auth
  );

  const [loginMutation, { isLoading, data }] = useLoginMutation();
  
  //useform use for manage input
  const { register, handleSubmit, reset, watch } = useForm();
  //handle form submition
  const onSubmit = (data) => {
    reset({ email: "", password: "" });
    dispatch(loginEmailPass(data));
    loginMutation(data);
  };
  const watchEmail = watch("email");

  //forgot password handler
  const forgotPass = () => {
    dispatch(sendForgotEmail(watchEmail));
  };

  //password or email wrong message
  const err = () =>
    toast.error("Password or Email Wrong", {
      closeButton: false,
    });
    
  //login success message
  const success = () =>
    toast.success("User login success!", {
      closeButton: false,
    });

  useEffect(() => {
    //show user login successfully message in display
    if (
      actionName.includes("authSlice/loginEmailPass/fulfilled") &&
      isLoginSuccess
    ) {
      success();
      //empty isLoginSuccess state in redux store
      dispatch(setIsLoginSuccess());
      navigate(from, {replace:true});
    }

    //show error message in display
    if (actionName.includes("authSlice/loginEmailPass/rejected") && isError) {
      err();
      //empty error state in redux store
      dispatch(errorEmty());
    }
  }, [user, isError, isLoginSuccess,actionName,dispatch]);

console.log("token",data,"line 71")

  return (
    <>
      <div className="min-w-[300px] md:min-w-[400px]">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="email"
            className="cs-input w-full"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <div>
            <input
              type="password"
              id="password"
              className="cs-input w-full"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <p
              onClick={forgotPass}
              className="text-[12px] cursor-pointer mt-2 text-red-600"
            >
              Forgot Password
            </p>
          </div>
          <button type="submit " className="cs-btn">
            Login
          </button>
        </form>
        <SolialLogin />
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
