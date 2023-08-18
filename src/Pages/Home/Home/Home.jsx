import React from "react";
import Faq from "../Faq/Faq";
import Plan from "../Plan/Plan";
import AllMovies from "../AllMovies/AllMovies";
import Banner from "../Banner/Banner";
import Action from "../Action/Action";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllMovies></AllMovies>
      <Action></Action>
      <Faq></Faq>
      <Plan></Plan>
    </div>
  );
};

export default Home;
