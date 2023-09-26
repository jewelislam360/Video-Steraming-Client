import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  useCurrentUserQuery,
  useEditUserMutation,
} from "../../redux/api/userApi";
import { sendForgotEmail } from "../../redux/features/authSlice/authThunk";

const User = () => {
  //get loged user form redux store
  const { user } = useSelector((state) => state.auth);
  const [editBio, setEditBio] = useState(false);
  const [bioValue, setBioValue] = useState("");
  const changeEmailRef = useRef("");
  const dispatch = useDispatch();
  console.log(user);

  //get login user
  const { data, isLoading, isSuccess } = useCurrentUserQuery({
    email: user?.userEmail,
  });
  console.log(data, "line 23");

  //user profile edit request
  const [editUserHandler, { data: editUserData, isSuccess: editUserSuccess }] =
    useEditUserMutation();

  const {
    Name,
    Email,
    emailVerified,
    phoneNumber,
    photoURL,
    bio
  } = data || {};

  // Initialize the form conditionally based on whether data is available
  const { register, handleSubmit, getValues, setValue } = useForm({
    values: {
      Email: Email,
      Name: Name,
      phoneNumber: phoneNumber,
      photoURL: photoURL,
    },
  });

  //user info edit request handler
  const onSubmit = (userData) => {
    editUserHandler({ ...userData, bio: bioValue });
    // console.log({ ...userData, bio: bioValue });
    setBioValue(false);
  };
  console.log(editUserData, "editUserData");

  //password change request handler
  const changePass = (e) => {
    e.preventDefault();
    dispatch(sendForgotEmail(changeEmailRef.current.value));
  };

  return (
    <div className="flex flex-col md:flex-row pb-20 gap-x-16 justify-center px-4 md:px-0">
      <div className=" ">
        <img
          src={photoURL}
          className="w-48 h-44 rounded object-cover  mb-4 select-all"
          alt=""
        />
        <h1 className="text-2xl font-semebold">{Name} </h1>
        {editBio ? (
          <textarea
            cols="24"
            rows="4"
            className="cs-input"
            value={bioValue?.slice(0, 80)}
            onChange={(e) => setBioValue(e.target.value)}
            placeholder="Writ your bio in 80 characters "
          />
        ) : (
          <>
            <p className="break-words overflow-auto max-w-[192px] text-left">
              {bio}
            </p>
            <button className="cs-btn" onClick={() => setEditBio(true)}>
              Edit bio
            </button>
          </>
        )}
      </div>
      <div>
        <h4 className="text-xl">General Information</h4>
        <p>
          By letting us know your name, we can make our support experience much
          more personal.
        </p>

        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 pb-[30px]  border-b-2 border-gray-500">
              <div>
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium  "
                >
                  Display name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="cs-input w-full"
                  placeholder="John Doe"
                  defaultValue={Name}
                  {...register("Name")}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium  "
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  className="cs-input w-full"
                  placeholder="Phone Number"
                  defaultValue={phoneNumber}
                  {...register("phoneNumber", { maxLength: 10 })}
                />
              </div>
              <div>
                <label
                  htmlFor="photoUrl"
                  className="block mb-2 text-sm font-medium  "
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoUrl"
                  className="cs-input w-full"
                  placeholder="Dhaka"
                  defaultValue={photoURL}
                  {...register("photoURL")}
                />
              </div>

              <div>
                <label
                  htmlFor="userEmail"
                  className="block mb-2 text-sm font-medium  "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="userEmail"
                  className="cs-input w-full"
                  placeholder="info@example.com"
                  defaultValue={Email}
                  {...register("Email")}
                  disabled
                />
              </div>
            </div>
            <button type="submit" className="cs-btn mt-4">
              Save Info
            </button>
          </div>
        </form>
        <form onSubmit={changePass}>
          <div className="mt-7 pb-[20px]  border-b-2 border-gray-500">
            <h4 className="text-xl mb-2">Password Change</h4>
            <div>
              <label htmlFor="passChange">Enter Your Email</label>
              <input
                type="email"
                className="cs-input w-full mt-2"
                placeholder="Enter your user email"
                id="passChange"
                ref={changeEmailRef}
              />
            </div>
          </div>
          <button type="submit" className="cs-btn mt-4">
            Changes Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
