import React from "react";
import History from "./History";
import LikedVideos from "./LikedVideos";
import PlayList from "./PlayList";

const UserDashboardHome = () => {
    console.log("hallo")
  return (
    <>
      <History />
      <LikedVideos />
      <PlayList />
    </>
  );
};

export default UserDashboardHome;
