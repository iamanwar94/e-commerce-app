import React from "react";
// import Carousal from "../../Components/Carousal/Carousal";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Furniture from "../Furniture/Furniture";

const Home = () => {
  return (
    <div className="home_wrapper">
      <Navbar />
      <Furniture />
      <Footer />
    </div>
  );
};

export default Home;
