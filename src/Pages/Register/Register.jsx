import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SolialLogin from "../../components/SocialLog";
import { createUserEmailPass } from "../../redux/features/authSlice/authThunk";
import {
  errorEmty,
  setIsLoginSuccess,
} from "../../redux/features/authSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSignUpMutation } from "../../redux/api/userApi";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  // update profile
  const {updateUserProfile}=useContext(AuthContext);


  const dispatch = useDispatch();
  //auth state import form store
  const { actionName, error, isLoginSuccess, isError, user } = useSelector(
    (state) => state.auth
  );
  const [signMutation, { data }] = useSignUpMutation();
  //use form hook
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,}) /;

  

  //form submit handler
  const onSubmit = (data) => {
    const saveUser = { Name: data.userName, Email: data.email };
    // user post method
    fetch('https://video-streaming-server-sigma.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          success();
          //empty isLoginSuccess state in store
          dispatch(setIsLoginSuccess());
        }
      });


    dispatch(createUserEmailPass(data));
    signMutation(data);
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

  useEffect(() => {
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
  }, [isError, isLoginSuccess]);

  return (
    <div className="md:min-w-[400px]">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="userNname"
          className="cs-input w-full"
          placeholder="User Name"
          {...register("userName", { required: true })}
        />
        <input
          type="email"
          id="email"
          className="cs-input w-full"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="photo"
          id="photo"
          className="cs-input w-full"
          placeholder="PhotoURL"
          {...register("PhotoURL", { required: true })}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-0 md:gap-x-2">
          <div>
            <input
              type="password"
              id="password"
              className="cs-input w-full"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div>
            <input
              type="password"
              id="confPass"
              className="cs-input w-full"
              placeholder="Confirm Password"
              {...register("confPass", { required: true })}
            />
          </div>
        </div>

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
