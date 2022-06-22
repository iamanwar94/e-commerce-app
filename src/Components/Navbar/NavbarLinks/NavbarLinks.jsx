import React from "react";
import { Link } from "react-router-dom";

import "./NavbarLinks.scss";

const NavbarLinks = () => {
  return (
    <div className="navbar_links_items_wrapper">
      <p>
        <Link className="links" to="/furniture">Furniture</Link>
      </p>
      <p>
        <Link className="links" to="/mattress">Mattress</Link>
      </p>
      <p>
        <Link className="links" to="/outdoor">Outdoor</Link>
      </p>
      <p>
        <Link className="links" to="/kids">Kids</Link>
      </p>
      <p>
        <Link className="links" to="/baby">Baby & Toddler</Link>
      </p>
      <p>
        <Link className="links" to="/organization">Organization</Link>
      </p>
      <p>
        <Link className="links" to="/">Bath</Link>
      </p>
      <p>
        <Link className="links" to="/bath">Bedding</Link>
      </p>
      <p>
        <Link className="links" to="/decor">Decor</Link>
      </p>
      <p>
        <Link className="links" to="/rugs">Rugs</Link>
      </p>
      <p>
        <Link className="links" to="/lighting">Lighting</Link>
      </p>
      <p>
        <Link className="links" to="/shopby">Shop By</Link>
      </p>
      <p>
        <Link className="links red" to="/deals">Deals</Link>
      </p>
    </div>
  );
};

export default NavbarLinks;
