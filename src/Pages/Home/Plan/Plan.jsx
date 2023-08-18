import React from "react";
import "./Plan.css";
import { FaArrowRight } from "react-icons/fa";

const Plan = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-900 my-10 p-10 pt-1 rounded-lg">
      <h1 className="text-5xl text-white text-center my-7 font-bold">Choose Your Plan</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div class="text-black bg-white card-body plan">
          <div className="text-center mx-auto img">
            <img src="https://i.ibb.co/f0L1m2P/image.png" alt="" srcset="" />
          </div>
          <div className="row">
            <div class="price-details">
              <span class="price">9</span>
              <p className="font-medium text-lg">For Daily Plan</p>
            </div>
            <div className="">
              <ul>
                <span className="flex items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Access to the entire video library
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    HD video quality (up to 1080p)
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Ad-free streaming
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    1 Device access
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <button>Get It</button>
        </div>

        <div class="text-black bg-white card-body plan">
          <div className="text-center mx-auto img">
            <img src="https://i.ibb.co/f0L1m2P/image.png" alt="" srcset="" />
          </div>
          <div className="row">
            <div class="price-details">
              <span class="price2">60</span>
              <p className="font-medium text-lg">For Weekly Plan</p>
            </div>
            <div className="">
              <ul>
                <span className="flex items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Daily Pass
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Ultra HD video quality (up to 4K)
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Stream on two devices simultaneously
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Offline downloads on mobile devices
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <button>Get It</button>
        </div>

        <div class="text-black bg-white card-body plan">
          <div className="text-center mx-auto img">
            <img src="https://i.ibb.co/f0L1m2P/image.png" alt="" srcset="" />
          </div>
          <div className="row">
            <div class="price-details">
              <span class="price3">250</span>
              <p className="font-medium text-lg">For Monthly Plan</p>
            </div>
            <div className="">
              <ul>
                <span className="flex items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Weekly Pass
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Unlimited device streaming
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Exclusive content and early releases
                  </li>
                </span>
                <span className="flex items-center text-lg mt-2">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Offline downloads on mobile devices
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <button>Get It</button>
        </div>

        <div class="text-black bg-white card-body plan">
          <div className="text-center mx-auto img">
            <img src="https://i.ibb.co/f0L1m2P/image.png" alt="" srcset="" />
          </div>
          <div className="row">
            <div class="price-details">
              <span class="price4">2880</span>
              <p className="font-medium text-lg">For Yearly Plan</p>
            </div>
            <div className="">
              <ul>
                <span className="flex items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Everything in the Monthly Pass
                  </li>
                </span>
                <span className="flex items-center text-lg">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    Save 17% compared to monthly payments
                  </li>
                </span>
                <span className="flex items-center text-lg ">
                  {" "}
                  <FaArrowRight />{" "}
                  <li className="font-medium text-white ">
                    One-time payment for a year of premium streaming
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <button>Get It</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
