import React from "react";
import "./Carousal.scss";
import furniture from "./assets/fur14.jpg";

const Carousal = () => {
  return (
    <div className="carousal_wrapper">
      <div className="discount_line">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora
      </div>
      <div
        className="carousal"
        style={{
          backgroundImage: `url('${furniture}')`,
        }}
      ></div>
    </div>
  );
};

export default Carousal;
