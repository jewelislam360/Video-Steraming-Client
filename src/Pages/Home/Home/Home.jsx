import React from "react";
import Faq from "../Faq/Faq";
import Plan from "../Plan/Plan";
import AllMovies from "../AllMovies/AllMovies";
import Banner from "../Banner/Banner";
import Action from "../Action/Action";
import Banner3 from "../Banner3/Banner3";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllMovies></AllMovies>
      <Action></Action>
      <Banner3></Banner3>
      <AllMovies></AllMovies>
      <Action></Action>
      <Faq></Faq>
      <Plan></Plan>
    </div>
  );
};

export default Home;
