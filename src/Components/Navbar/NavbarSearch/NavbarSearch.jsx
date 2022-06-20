import React from "react";
import "./NavbarSearch.scss";
import logo from "../images/Ashley-Logo-Vertical.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="navbar_search_wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="zip">
        <p>Your closest Ashley</p>
        <h5>Please Enter Zip Code</h5>
      </div>
      <div className="navbar_search_input">
        <input type="text" placeholder="Search..."/>
        <div className="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="navbar_links_wrapper">
        <p>Login Account</p>
        <p>Delivery Tracking</p>
        <p>Help</p>
        <p>Prequalify for Financing</p>
        <p>
          <div className="cart_icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <button>0</button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default NavbarSearch;
