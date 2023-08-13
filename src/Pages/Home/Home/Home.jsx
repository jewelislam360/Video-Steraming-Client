import React from "react";
import Faq from "../Faq/Faq";
import Plan from "../Plan/Plan";
import Contact from "../../Contact/Contact";
import AllMovies from "../AllMovies/AllMovies";

const Home = () => {
  return (
    <div>
    <AllMovies></AllMovies>
    <Faq></Faq>
    <Plan></Plan>
    <Contact/>
    </div>
  );
};

export default Home;
