import ReactPlayer from "react-player";
import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaImdb, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const ViewPlayer = () => {
  const movie = useLoaderData();
  const {
    title,
    video,
    like,
    img,
    trailer,
    description,
    category,
    time,
    rating,
  } = movie;

  return (
    <div className="p-20">
      <div className="">
        <ReactPlayer
          className="react-player mx-auto"
          url={video}
          controls={true}
          light={img}
          width="75%"
          height="500px"
        />
      </div>

      <div className="my-7">
        <h2 className="text-4xl font-medium">{title}</h2>
        <p className="text-xl my-2">{description}</p>

        <div className=" flex gap-5 text-l">
          <p className="font-semibold">Genre : </p>
          <p>{category}</p>
        </div>

        <div className=" flex gap-5 text-l my-2">
          <p className="font-semibold">Run Time : </p>
          <p>{time}</p>
        </div>

        <div className=" flex gap-5 text-l my-2">
          <p className="font-semibold">Language : </p>
          <p>English</p>
        </div>
        <div className=" flex gap-5 text-l my-2">
          <p className="font-semibold">Subtitles : </p>
          <p>English</p>
        </div>
        <div className=" flex gap-5 text-l my-2">
          <p className="font-semibold">Audio Languages : </p>
          <p>English</p>
        </div>

        <div className="flex text-l items-center gap-3">
          <span>
            <FaImdb className="text-yellow-600"></FaImdb>
          </span>
          <span>{rating}</span>
        </div>
        <div className="md:flex justify-between">
          <div className="flex items-center text-l gap-3 ">
            <p>
              <AiOutlineLike></AiOutlineLike>
            </p>
            <p>{like}</p>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-3xl font-semibold">Social Share :</p>
            <p className="flex gap-2 ">
              <span className="p-3 rounded-md hover:bg-red-600 hover:cursor-pointer">
                <FaFacebook />
              </span>
              <span className="p-3 rounded-md hover:bg-red-600 hover:cursor-pointer">
                <FaLinkedin />
              </span>{" "}
              <span className="p-3 rounded-md hover:bg-red-600 hover:cursor-pointer">
                <FaTwitter />
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-red-600 border-[2px]" />

      <div className="textarea my-2 rounded-md">
        <textarea className="w-[100%] p-2 text-black font-mono"
          placeholder="Write your comment here..."
        ></textarea>
        <button className="btn btn-block bg-red-700 hover:bg-slate-900 hover:text-white">Submit</button>
      </div>
    </div>
  );
};

export default ViewPlayer;
