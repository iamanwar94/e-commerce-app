import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_search_wrapper">
        <div className="search_para_wrapper">
          <p>
            <div className="icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            Get up to $100 off* your first order when you sign up for emails
          </p>
        </div>
        <div className="search_btn">
          <input type="text" placeholder="Enter Email Address" />
          <button>Sign Up</button>
        </div>
      </div>
      {/* footer search ends  */}
      <div className="footer_links_wrapper"></div>
      {/* footer links ends  */}
      <div className="footer_bottom_links">
        <div className="country">
          <p>United States</p>
        </div>
        <div className="footer_bottom_link_items"></div>
      </div>
      {/* footer bottom links ends here  */}
    </div>
  );
};

export default Footer;
