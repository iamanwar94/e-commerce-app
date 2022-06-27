import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import flag from "./images/USflag.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_search_wrapper">
        <div className="search_para_wrapper">
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Get up to $100 off* your first order when you sign up for emails
          </p>
        </div>
        <div className="search_btn">
          <input type="text" placeholder="Enter Email Address" />
          <button>Sign Up</button>
        </div>
      </div>
      {/* footer search ends  */}
      <div className="footer_links_wrapper">
        <div className="footer_links">
          <h3>Get To Know Us</h3>
          <Link to="/" className="links">
            About Ashley
          </Link>
          <Link to="/" className="links">
            Our History
          </Link>
          <Link to="/" className="links">
            About Ashley Furniture Industries
          </Link>
          <Link to="/" className="links">
            Careers
          </Link>
          <Link to="/" className="links">
            News
          </Link>
          <Link to="/" className="links">
            Social Responsibility
          </Link>
          <Link to="/" className="links">
            Store Locations
          </Link>
          <Link to="/" className="links">
            Trade Program
          </Link>
        </div>
        <div className="footer_links">
          <h3>Customer Care</h3>
          <Link to="/" className="links">
            Help Center
          </Link>
          <Link to="/" className="links">
            Apply for Financing
          </Link>
          <Link to="/" className="links">
            Prequalify for Financing
          </Link>
          <Link to="/" className="links">
            Lease to Own Option
          </Link>
          <Link to="/" className="links">
            Buy Now Pay Later
          </Link>
          <Link to="/" className="links">
            Returns
          </Link>
          <Link to="/" className="links">
            Accessibility
          </Link>
          <Link to="/" className="links">
            Consumer Notifications
          </Link>
          <Link to="/" className="links">
            FAQ
          </Link>
          <Link to="/" className="links">
            Price Match
          </Link>
          <Link to="/" className="links">
            Child Safety
          </Link>
          <Link to="/" className="links">
            Warranty Information
          </Link>
          <Link to="/" className="links">
            Product Care & Cleaning
          </Link>
          <Link to="/" className="links">
            Furniture Protection Plan
          </Link>
        </div>
        <div className="footer_links">
          <h3>Get Inspired</h3>
          <Link to="/" className="links">
            Blog
          </Link>
          <Link to="/" className="links">
            Home Ideas
          </Link>
          <Link to="/" className="links">
            Digital Catalog
          </Link>
          <Link to="/" className="links">
            3D Room Design
          </Link>
          <Link to="/" className="links">
            Hope to Dream
          </Link>
          <Link to="/" className="links">
            Refer a Friend
          </Link>
          <Link to="/" className="links">
            Design Services
          </Link>
        </div>
      </div>
      {/* footer links ends  */}
      <div className="footer_bottom_links">
        <div className="country">
          <img src={flag} alt="flag" />
          <Link to="/" className="links">
            United States
          </Link>
        </div>
        <div className="footer_bottom_link_items">
          <Link to="/" className="links">
            Offers & Details*
          </Link>
          <Link to="/" className="links">
            Terms & Conditions
          </Link>
          <Link to="/" className="links">
            Terms of Use
          </Link>
          <Link to="/" className="links">
            Privacy Policy
          </Link>
          <Link to="/" className="links">
            Interest-Based Ads
          </Link>
          <Link to="/" className="links">
            Do not sell my Personal Information
          </Link>
        </div>
      </div>
      {/* footer bottom links ends here  */}
    </div>
  );
};

export default Footer;
