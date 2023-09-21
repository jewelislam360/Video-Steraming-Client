import img from "../../../assets/b-img.jpg";
import "./Plan.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePaymentDocMutation } from "../../../redux/api/paymentApi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Plan = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [paymentDocHandler, { data }] = usePaymentDocMutation();
  const paymentHandler = (paymentInfo) => {
    paymentDocHandler({ ...paymentInfo, email: user?.email });
    navigate("/payment");
  };
  return (
    <div className=" my-9">
      <h1 className="font-medium text-5xl text-center my-11">Pricing Plan</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
        <div className="gap-5 plan">
          <div className="card bg-base-100 p-0 shadow-l image-full">
            <img src={img} alt="movie" />
            <div className="card-body">
              <p className="text-4xl text-center">Basic</p>
              <h2 className="text-6xl font-extrabold text-center">$ 99</h2>
              <p className="text-center">/Per Month</p>
            </div>
          </div>
          <div className=" mb-2 ">
            <div className="p-4">
              <ul>
                <span className="flex mt-7 items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Daily Pass
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white flex items-center ">
                    Ultra HD video quality (up to 4K)
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Stream on two devices simultaneously
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Offline downloads on mobile devices
                  </li>
                </span>
              </ul>
            </div>
            <div className="card-actions justify-center  pb-3">
              <button
                className="btn bg-red-600 border-none"
                onClick={() =>
                  paymentHandler({
                    usd: 99,
                    supsType: "Basic",
                    plan: "Monthly",
                  })
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="gap-5 plan">
          <div className="card bg-base-100 p-0 shadow-l image-full">
            <img src={img} alt="movie" />
            <div className="card-body">
              <p className="text-4xl text-center">Standard</p>
              <h2 className="text-6xl font-bold text-center">$199</h2>
              <p className="text-center">/Per Month</p>
            </div>
          </div>
          <div className=" mb-2 ">
            <div className="p-4">
              <ul>
                <span className="flex mt-7 items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Daily Pass
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Ultra HD video quality (up to 4K)
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Stream on two devices simultaneously
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Offline downloads on mobile devices
                  </li>
                </span>
              </ul>
            </div>
            <div className="card-actions justify-center pb-3">
              <button
                className="btn bg-red-600 border-none"
                onClick={() =>
                  paymentHandler({
                    usd: 199,
                    supsType: "Standard",
                    plan: "Monthly",
                  })
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="gap-5 plan">
          <div className="card bg-base-100 p-0 shadow-l image-full">
            <img src={img} alt="movie" />
            <div className="card-body">
              <p className="text-4xl text-center ">Premium</p>
              <h2 className="text-6xl font-bold  text-center">$999</h2>
              <p className="text-center">/Per Year</p>
            </div>
          </div>
          <div className=" mb-2 ">
            <div className="p-4">
              <ul>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Daily Pass
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Ultra HD video quality (up to 4K)
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Stream on two devices simultaneously
                  </li>
                </span>
                <span className="flex items-center text-lg mt-7">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Offline downloads on mobile devices
                  </li>
                </span>
              </ul>
            </div>
            <div className="card-actions justify-center pb-3">
              <button
                className="btn bg-red-600 border-none"
                onClick={() =>
                  paymentHandler({
                    usd: 999,
                    supsType: "Premium",
                    plan: "Yearly",
                  })
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
