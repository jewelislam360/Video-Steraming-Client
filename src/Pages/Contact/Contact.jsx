import React from "react";

const Contact = () => {
  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.8710477026!2d87.70357261671609!3d23.489442907365568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1691746986236!5m2!1sen!2sbd"
        className="w-full h-[448px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-4 right-40 p-4 min-w-[448px]  bg-gray-950 rounded">
        <h1 className="text-4xl py-2 text-center">Contact us</h1>
        <form action="" className="space-y-4">
          <input type="text" className="cs-input" placeholder="Name" />
          <input type="email" className="cs-input" placeholder="Email" />
          <textarea
            name=""
            id=""
            className="cs-input h-40"
            placeholder="Your Comment"
          />
          <input type="submit" value="Send Message" className="cs-btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
