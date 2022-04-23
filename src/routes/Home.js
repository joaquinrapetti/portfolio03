import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";

const Home = () => {
  return (
    <div className="container-home">
      <Navbar />
      <Main />
      <Roadmap />
    </div>
  );
};

export default Home;
