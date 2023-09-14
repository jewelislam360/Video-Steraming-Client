import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="bg-slate-800 w-[90%] pt-10">
    <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-orange-700 py-4">---- Movies Managing ----</h3>
      </div>
      <div className="overflow-x-auto text-white my-10">
        <table className="table table-lg">
          {/* head */}
          <thead className="text-lg text-orange-500">
            <tr>
              <th>Thumbnail</th>
              <th>Movie Title</th>
              <th>Category</th>
              <th>Update</th>
              <th>Action</th>
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
                  <button className="btn btn-ghost btn-sm  text-cyan-50  bg-orange-700 hover:bg-red-700 border-0"><AiFillEdit></AiFillEdit> </button>
                </td>
                <th>
                  <button className='btn btn-sm text-white  bg-orange-700 hover:bg-red-700 border-0'><FaTrashAlt></FaTrashAlt></button>
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
