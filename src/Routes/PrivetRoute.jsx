import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();


  return <>
    {loading ? <progress className="progress w-56"></progress> : user? children : <Navigate to="/login" state={{ from: location }} replace></Navigate>}
  </>;
};

export default PrivetRoute;
{/* */ }