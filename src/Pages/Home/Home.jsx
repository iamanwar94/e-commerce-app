import React from "react";
import Carousal from "../../Components/Carousal/Carousal";
import Categories from "../../Components/Categories/Categories";
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
    </div>
  );
};

export default Home;
