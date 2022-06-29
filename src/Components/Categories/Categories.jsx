import React from "react";
import "./Categories.scss";
import fur from "./assets/fur17.jpg";

const Categories = () => {
  const Card = () => {
    return (
      <div className="six_card_item">
        <img src={fur} alt="furniture" />
        <div className="card_title">
          <p>Dummy Text</p>
        </div>
      </div>
    );
  };
  return (
    <div className="category_wrapper">
      <div className="category_six_cards_wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="category_six_cards_wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Categories;
