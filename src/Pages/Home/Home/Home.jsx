import React, { useState } from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-4xl">This is home Page </h1>
          <button className="btn btn-primary">Increment</button>
          <button className="btn btn-primary">Decrement</button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
