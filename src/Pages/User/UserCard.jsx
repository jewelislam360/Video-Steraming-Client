import React from "react";

import {
  FaPlay,
  FaPlus,
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEllipsisV,
  FaShare,
} from "react-icons/fa";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <>
      <div className="card card-compact  mx-auto bg-black ">
        <div className="relative group ">
          <figure>
            <img
              className="group-hover:scale-150 group-hover:opacity-50 group-hover:duration-300 transition-all ease-out "
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1694065596~exp=1694066196~hmac=2d7108d395935e99a258c7dfba407a406959c84afeaa0171158e9c70034395fd"
              alt="Shoes"
            />
          </figure>

          <div>
            <Link>
              <button className=" bg-red-600 p-5 rounded-full  group/edit invisible absolute bottom-[45%] right-[45%] group-hover/:visible ">
                <FaPlay className=""></FaPlay>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body ">
          <div className="flex justify-between">
            <h2 className="card-title">Hidden Love</h2>
            {/*      <!-- Component: Top base sized tooltip --> */}
            <span
              className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
              aria-describedby="tooltip-01"
            >
              {/*        <!-- Tooltip trigger --> */}
              <FaEllipsisV className="text-xl mt-1" />
              {/*        <!-- End Tooltip trigger --> */}
              <span
                role="tooltip"
                id="tooltip-01"
                className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-32 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100 "
              >
                <span className="flex  hover:text-red-700">
                  <FaShare className="text-lg mt-1" />{" "}
                  <span className="text-lg ms-2">Shear</span>
                </span>
                <p className="flex  hover:text-red-700">
                  <BiSolidArrowToBottom className="text-2xl mt-1" />{" "}
                  <span className="text-base mt-1">Download</span>
                </p>
                <span className="flex  hover:text-red-700">
                  <GoReport className="text-lg mt-2" />{" "}
                  <span className="text-lg ms-2">Report</span>
                </span>
              </span>
            </span>
            {/*      <!-- End Top base sized tooltip --> */}
          </div>
          <div className="flex">
            <p>1K views</p>
            <p>1 month ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
