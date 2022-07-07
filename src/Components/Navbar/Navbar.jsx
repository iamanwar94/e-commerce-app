import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faComment } from "@fortawesome/free-solid-svg-icons";

import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

import "./Navbar.scss";

const Navbar = () => {
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
        <div className="features_items yellow">
          <h3>In Stock and Ready to Ship</h3>
          <div className="links_div">
            <Link to="/" className="links">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="features_items grey">
          <h3>Save upto $200 on selected Dining Sets - Online Only</h3>
          <div className="links_div">
            <Link to="/" className="links">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="features_items light-grey">
          <h3>Extra 10% off* Desks!</h3>
          <div className="links_div">
            <Link to="/" className="links">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <NavbarSearch />
      <NavbarLinks />
      <div className="navbar_chat">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon={faComment} />
          </span>
          chat with a personal online sales assistant
        </p>
      </div>
      <div className="discount_line">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora
      </div>
    </div>
  );
};

export default Navbar;
