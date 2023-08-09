import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { googleLog } from "../../features/authSlice/authThunk";

const SolialLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
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
        className="px-4 w-[48%] bg-white py-[10px] rounded-[1px] flex items-center gap-x-4"
        onClick={() => dispatch(googleLog())}
      >
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default SolialLogin;
