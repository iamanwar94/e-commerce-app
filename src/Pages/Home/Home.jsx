import React from "react";
import Carousal from "../../Components/Carousal/Carousal";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import Furniture from "../Furniture/Furniture";
import cardimage from "./assets/fur12.jpg";
import "./Home.scss";

const Home = () => {
  const Card = () => {
    return (
      <div className="three_card_item">
        <img src={cardimage} alt="cardimage" />
      </div>
    );
  };
  return (
    <div className="home_wrapper">
      <Navbar />
      <Carousal />
      <div className="three_cards_wrapper">
        <div className="three_cards_heading">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
        </div>
        <div className="three_cards">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="three_cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
