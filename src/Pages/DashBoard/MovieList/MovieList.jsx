import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="bg-slate-800 w-[90%]">
    <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-red-800 py-4">---- Movies Managing ----</h3>
      </div>
      <div className="overflow-x-auto text-white">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>Thumbnail</th>
              <th>Movie Title</th>
              <th>Category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {movie.map((allMovie) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={allMovie.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold text-lg">{allMovie.title}</div>                    
                    <span className="badge badge-ghost badge-m">
                      {allMovie.description}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="text-l">{allMovie.category}</div>
                </td>
                <td>
                  <Link to={`/dashboard/movieList/${allMovie?._id}`}>
                  <button className="btn btn-ghost btn-xs"><AiFillEdit className="text-xl border p-1 rounded-sm text-green-600 font-bold"></AiFillEdit> </button>
                  </Link>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
