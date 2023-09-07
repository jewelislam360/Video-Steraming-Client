import React from "react";
import { FaHistory } from "react-icons/fa";
import History from "./History";
import LikedVideos from "./LikedVideos";
import PlayList from "./PlayList";

const UserDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-x-6">
        <div className="col-span-1">
          <ul className="space-y-2">
            <li className="font-semibold hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ">
              <FaHistory className="inline-block" /> Library
            </li>
            <li className="font-semibold hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded">
              <FaHistory className="inline-block" /> History
            </li>
            <li className="font-semibold hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded">
              <FaHistory className="inline-block" /> Liked Videos
            </li>
            <li className="font-semibold hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded">
              <FaHistory className="inline-block" /> Watch Later
            </li>
            <li className="font-semibold hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded">
              <FaHistory className="inline-block" /> Play Lists
            </li>
          </ul>
        </div>
        <div className="col-span-6 space-y-3">
          <History />
          <LikedVideos />
          <PlayList />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
