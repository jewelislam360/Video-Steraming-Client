import React from "react";
import Faq from "../Faq/Faq";
import Plan from "../Plan/Plan";
import AllMovies from "../AllMovies/AllMovies";
import Banner from "../Banner/Banner";
import Action from "../Action/Action";
import Banner3 from "../Banner3/Banner3";
import Animation from "../Animation/Animation";
import Adventure from "../Adventure/Adventure";
import Sponsor from "../Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllMovies></AllMovies>
      <Action></Action>
      <Banner3></Banner3>
      <Animation></Animation>
      <Adventure></Adventure>
      <Faq></Faq>
      <Plan></Plan>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
