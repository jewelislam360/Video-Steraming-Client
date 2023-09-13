import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Home/MovieCard/MovieCard";
import UserCard from "./UserCard";

const PlayList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-lg">Playlists</p>{" "}
        <Link to="/userdashboard/playlists" className="text-sky-500 hover:underline">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2">
        {movies?.slice(0, 4)?.map((movie) => (
          <UserCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
