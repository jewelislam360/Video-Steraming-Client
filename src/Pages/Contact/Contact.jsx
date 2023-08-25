import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGlobe, FaHome, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" bg-gray-950 pt-32">
      <h1 className="font-semibold text-center text-4xl text-white">
        Contact us
      </h1>
      <form className="space-y-4 px-4 md:px-0 md:max-w-3xl mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="cs-input w-full  "
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            className="cs-input w-full  "
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            className="cs-input w-full  "
            placeholder="Phone"
            {...register("phone")}
          />
          <input
            type="text"
            className="cs-input w-full  "
            placeholder="Address"
            {...register("address")}
          />
        </div>
        <textarea
          placeholder="Write from here"
          className="cs-input w-full row-span-full h-36"
          {...register("message", { required: true })}
        />
        <div className="text-center">
          <input
            type="submit"
            value="Send Message"
            className="cs-btn hover:bg-red-600/80 duration-500"
          />
        </div>
      </form>

      <div className="relative ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.8710477026!2d87.70357261671609!3d23.489442907365568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1691746986236!5m2!1sen!2sbd"
          className="w-full h-[448px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0 md:top-4 md:right-40 p-6 md:p-12 md:min-w-[448px]  bg-gradient-to-l from-[#000000] to-[#222222] rounded ">
          <ul className="space-y-4 ">
            <li className="flex gap-x-4 items-center  text-white border-b-2 pb-5 border-gray-500">
              <div className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] flex justify-center items-center rounded-full  bg-gradient-to-t from-[#0259ae] to-[#12b4f2]">
                <FaHome />
              </div>
              <div>
                <p>
                  Home #2 Dhaka <br />
                  Bangladesh
                </p>
              </div>
            </li>
            <li className="flex gap-x-4 items-center  text-white border-b-2 pb-5 border-gray-500">
              <div className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] flex justify-center items-center rounded-full  bg-gradient-to-t from-[#0259ae] to-[#12b4f2]">
                <FaPhone />
              </div>
              <div>
                <p>
                  +8801700000000
                  <br />
                  +8801700000000
                </p>
              </div>
            </li>
            <li className="flex gap-x-4 items-center  text-white border-b-2 pb-5 border-gray-500">
              <div className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] flex justify-center items-center rounded-full  bg-gradient-to-t from-[#0259ae] to-[#12b4f2]">
                <FaEnvelope />
              </div>
              <div>
                <p>
                  example@e-mail.com <br />
                  example@e-mail.com
                </p>
              </div>
            </li>
            <li className="flex gap-x-4 items-center  text-white ">
              <div className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] flex justify-center items-center rounded-full  bg-gradient-to-t from-[#0259ae] to-[#12b4f2]">
                <FaGlobe />
              </div>
              <div>
                <p>www.cineStream.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
