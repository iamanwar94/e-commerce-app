import React from "react";
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import bed1 from "./assets/bed_PNG17418.png";
import bed2 from "./assets/APK-B643-QUB-10x8-CROP.webp";

const ProductCard = () => {
  return (
    <div className="products_card">
      <div className="heart">
        <h4 className="icon">
          <FontAwesomeIcon icon={faHeart} />
        </h4>
          <h4 className="display">Add to Wishlist</h4>
      </div>
      <div className="card_image">
        <img src={bed1} alt="bed" className="img1" />
        <div className="display">
          <img src={bed2} alt="bed" className="img2" />
          <p>QUICK VIEW</p>
        </div>
      </div>
      <div className="card_info">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <div className="ratings">
          <div className="span">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="span">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="span">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="span">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="span">
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <p>Price at $499.99 - $ 899.99</p>
        <p className="delovery_detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
