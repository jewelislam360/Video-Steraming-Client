import React, { useEffect, useState } from "react";
import MovieCard from "../Home/MovieCard/MovieCard";
import { Link } from "react-router-dom";

const History = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  console.log(movies)
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-lg">History</p>{" "}
        <Link
          to="/userdashboard/history"
          className="text-sky-500 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2">
        {movies?.slice(0, 4)?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default History;
