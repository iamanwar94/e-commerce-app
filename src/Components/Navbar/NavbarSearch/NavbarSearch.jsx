import React from "react";
import "./NavbarSearch.scss";
import logo from "../images/Ashley-Logo-Vertical.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarSearch = () => {
  return (
    <div className="navbar_search_wrapper">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* <div className="zip">
        <p>Your closest Ashley</p>
        <h5>Please Enter Zip Code</h5>
      </div> */}
      <div className="navbar_search_input">
        <input type="text" placeholder="Search..." />
        <div className="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="navbar_links_wrapper">
        <p>
          <Link to="/login" className="links">
            Login Account
          </Link>
        </p>
        <p>
          <Link to="/login" className="links">
            Delivery Tracking
          </Link>
        </p>
        <p>
          <Link to="/" className="links">
            Prequalify for Financing
          </Link>
        </p>
        <div className="icon_wrapper">
          <Link to="/cart">
            <span className="cart_icon">
              <AiOutlineShoppingCart className="icon" />
              <span className="badge">0</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
