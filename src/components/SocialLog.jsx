import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { googleLog } from "../redux/features/authSlice/authThunk";
import {
  errorEmty,
  setIsLoginSuccess,
} from "../redux/features/authSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SolialLogin = () => {
  const dispatch = useDispatch();
  const { isLoginSuccess, isError, actionName } = useSelector(
    (state) => state.auth
  );
  //password or email wrong message
  const err = () =>
    toast.error("Try agin !", {
      closeButton: false,
    });
  //login success message
  const success = () =>
    toast.success("User login success!", {
      closeButton: false,
    });

  //show user login successfully message in display
  if (
    actionName.includes("authSlice/googleLogin/fulfilled") &&
    isLoginSuccess
  ) {
    success();
    //empty isLoginSuccess state in redux store
    dispatch(setIsLoginSuccess());
  }

  //show error message in display
  if (actionName.includes("authSlice/googleLogin/rejected") && isError) {
    err();
    //empty error state in redux store
    dispatch(errorEmty());
  }
  return (
    <div className="pt-4 flex justify-between">
      <button
        type="submit "
        className="px-4 w-[48%]  bg-blue-600 py-[10px] rounded-[1px] text-white flex items-center gap-x-4"
      >
        <FaFacebook /> Facebook
      </button>
      <button
        type="submit "
        className="px-4 w-[48%] text-black bg-white py-[10px] rounded-[1px] flex items-center gap-x-4"
        onClick={() => dispatch(googleLog())}
      >
        <FaGoogle /> Google
      </button>
      <ToastContainer />
    </div>
  );
};

export default SolialLogin;
