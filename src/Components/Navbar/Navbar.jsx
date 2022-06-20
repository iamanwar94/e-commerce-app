import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import NavbarSearch from "./NavbarSearch/NavbarSearch";

const Navbar = () => {
  const [yellowHover, setYellowHover] = useState(false);
  const [greyHover, setGreyHover] = useState(false);
  const [lightHover, setLightHover] = useState(false);

  const yellowMouseEnterHandler = () => {
    setYellowHover(true);
  };
  const greyMouseEnterHandler = () => {
    setGreyHover(true);
  };
  const lightMouseEnterHandler = () => {
    setLightHover(true);
  };
  const mouseDownHandler = () => {
    setGreyHover(false);
    setLightHover(false);
    setYellowHover(false);
  };
  return (
    <div className="navbar_wrapper">
      <div className="navbar_kids_page_navigator_wrapper">
        <div className="header">
          <p className="ashley">Ashley</p>
          <p className="baby">Baby & Kids</p>
        </div>
        <div className="mobile_app">
          <p className="icon">
            <FontAwesomeIcon icon={faMobileScreen} />
          </p>
          <p>Mobile App</p>
        </div>
      </div>
      {/* baby ends  */}
      <div className="navbar_features">
        <div
          className="features_items yellow"
          onMouseEnter={yellowMouseEnterHandler}
          onMouseLeave={mouseDownHandler}
          style={
            yellowHover
              ? { height: "80px", margiTop: "20px" }
              : { height: "40px" }
          }
        >
          <h3>In Stock and Ready to Ship</h3>
          <p>Shop Now</p>
        </div>
        <div
          className="features_items grey"
          onMouseEnter={greyMouseEnterHandler}
          onMouseLeave={mouseDownHandler}
          style={greyHover ? { height: "80px" } : { height: "40px" }}
        >
          <h3>Save upto $200 on selected Dining Sets - Online Only</h3>
          <p>Shop Now</p>
        </div>
        <div
          className="features_items light-grey"
          onMouseEnter={lightMouseEnterHandler}
          onMouseLeave={mouseDownHandler}
          style={lightHover ? { height: "80px" } : { height: "40px" }}
        >
          <h3>Extra 10% off* Desks!</h3>
          <p>Shop Now</p>
        </div>
      </div>
      <NavbarSearch />
    </div>
  );
};

export default Navbar;
