import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="header-text mt-4">
      <div className="footer box-shadow">
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/chart" className="navbar-brand">
            Harian
          </Link>
          <Link to="/about" className="navbar-brand">
            Data
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
