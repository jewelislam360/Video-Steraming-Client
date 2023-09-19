import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const ManageTvShow = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => setTvShow(data));
  }, []);

  return (
    <div className="bg-slate-800 w-[90%] pt-10">
    <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-red-700 py-4">---- Tv-Show Managing ----</h3>
      </div>
      <div className="overflow-x-auto text-white my-10">
        <table className="table table-lg">
          {/* head */}
          <thead className="text-[20px] text-red-500">
            <tr>
              <th>SL No:</th>
              <th>Thumbnail</th>
              <th>Tv-Show Title</th>
              <th>Category</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tvShow.map((alltvShow,index) => (
              <tr>
                <td>
                    {index + 1} .
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={alltvShow.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold text-lg">{alltvShow.title}</div>                    
                    <span className="badge badge-ghost badge-m">
                      {alltvShow.description}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="text-l">{alltvShow.category}</div>
                </td>
                <td>
                  <button className="btn btn-ghost btn-sm  text-cyan-50  bg-[#070A52] hover:bg-red-700 border-0"><AiFillEdit></AiFillEdit> </button>
                </td>
                <th>
                  <button className='btn btn-sm text-white  bg-red-700 hover:bg-red-200 hover:text-red-700 border-0'><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTvShow;





// import React, { useEffect, useState } from "react";
// import { AiFillEdit } from "react-icons/ai";
// import { FaTrashAlt } from "react-icons/fa";

// const ManageTvShow = () => {
//   const [tvShow, setTvShow] = useState([]);

//   useEffect(() => {
//     fetch("https://video-streaming-server-sigma.vercel.app/allMovies")
//       .then((res) => res.json())
//       .then((data) => setTvShow(data));
//   }, []);

//   return (
//     <div className="bg-slate-800 w-full p-6 md:w-[90%] md:mx-auto">
//       <div className="text-center md:w-4/12 mx-auto">
//         <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-red-700 py-4">---- Tv-Show Managing ----</h3>
//       </div>
//       <div className="overflow-x-auto text-white my-10">
//         <table className="min-w-full">
//           {/* head */}
//           <thead className="text-lg text-red-500">
//             <tr>
//               <th>Thumbnail</th>
//               <th>Tv-Show Title</th>
//               <th>Category</th>
//               <th>Update</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {tvShow.map((alltvShow, index) => (
//               <tr key={index}>
//                 <td className="flex justify-center">{index + 1}</td>
//                 <td>
//                   <div className="flex items-center justify-center space-x-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle w-12 h-12">
//                         <img
//                           src={alltvShow.img}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div>
//                     <div className="font-bold text-lg">{alltvShow.title}</div>
//                     <span className="badge badge-ghost badge-m">
//                       {alltvShow.description}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="flex justify-center">
//                   <div className="text-l">{alltvShow.category}</div>
//                 </td>
//                 <td>
//                   <button className="btn btn-ghost btn-sm text-cyan-50 bg-[#070A52] hover:bg-red-700 border-0">
//                     <AiFillEdit />
//                   </button>
//                 </td>
//                 <td>
//                   <button className="btn btn-sm text-white bg-red-700 hover:bg-red-200 hover:text-red-700 border-0">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageTvShow;

