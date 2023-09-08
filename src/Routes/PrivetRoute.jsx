import React from "react";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../redux/api/userApi";

const PrivetRoute = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth, "line 7 user");
  const { isSuccess, data } = useCurrentUserQuery({ email: "emon@gmail.com" });
  console.log(data, "user data");
  return <div></div>;
};

export default PrivetRoute;
