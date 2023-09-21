import React from "react";

import "./Sponsor.css";

import img1 from "../../../assets/sponsor/1.png";
import img11 from "../../../assets/sponsor/1-1.png";
import img2 from "../../../assets/sponsor/2.png";
import img22 from "../../../assets/sponsor/2-2.png";
import img3 from "../../../assets/sponsor/3.png";
import img33 from "../../../assets/sponsor/3-3.png";
import img4 from "../../../assets/sponsor/4.png";
import img44 from "../../../assets/sponsor/4-4.png";
import img5 from "../../../assets/sponsor/5.png";
import img55 from "../../../assets/sponsor/5-5.png";
import img6 from "../../../assets/sponsor/6.png";
import img66 from "../../../assets/sponsor/6-6.png";

const Sponsor = () => {
  return (
    <div
      className=" our-clients height-[full]	 grid	align-middle" >
      <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-white rounded-full capitalize border-y-4 border-t-white border-b-orange-700 py-4">---- Our Sponsors ----</h3>
      </div>
      <ul>
        <li>
          {" "}
          <img src={img11} alt="" /> <img src={img1} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={img22} alt="" /> <img src={img2} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={img33} alt="" /> <img src={img3} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={img44} alt="" /> <img src={img4} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={img55} alt="" /> <img src={img5} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={img66} alt="" /> <img src={img6} alt="" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sponsor;
