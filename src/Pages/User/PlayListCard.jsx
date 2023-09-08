import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlayListCard = () => {
  return (
    <>
      <div className="card card-compact w-full bg-black  ">
        <div className="relative group">
          <figure>
            <img
              className="group-hover:scale-150 group-hover:opacity-50 group-hover:duration-300 transition-all ease-out"
              src="https://themefisher.com/blog/booster-admin.png"
              alt="Shoes"
            />
          </figure>

          <div>
            <Link to={`viewPlayer/1`}>
              <button className=" bg-red-600 p-5 rounded-full  group/edit invisible absolute bottom-[45%] right-[45%] group-hover/:visible ">
                <FaPlay className=""></FaPlay>
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body ">
          <h2 className="card-title">""</h2>
          <div className="flex">
            <p>{time}</p>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListCard;
