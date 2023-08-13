import React from "react";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-900 my-10 p-10 pt-1 rounded-lg">
      <h1 className="text-5xl text-center my-7 font-bold">Choose Your Plan</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div class="text-black bg-white card-body plan">
          <div className="text-center mx-auto img">
            <img src="https://i.ibb.co/f0L1m2P/image.png" alt="" srcset="" />
          </div>
          <div className="row">
            <div class="price-details">
              <span class="price">9</span>
              <p className="font-medium">For Daily Plan</p>
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
              <p className="font-medium">For Weekly Plan</p>
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
              <p className="font-medium">For Monthly Plan</p>
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
              <p className="font-medium">For Yearly Plan</p>
            </div>
          </div>
          <button>Get It</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
