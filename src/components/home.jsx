import { useState } from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-banner">
      <div className="banner-text">
        <h1>Tech Corner</h1>
        <h3>We have the parts</h3>
      </div>
      <img src="/img/home-mobo.jpg" alt="mobo" />
    </div>
  );
};

export default Home;
