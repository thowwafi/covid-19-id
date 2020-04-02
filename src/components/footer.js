import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="header-text">
      <div className="footer">
        <nav className="navbar fixed-bottom navbar-light bg-dark">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/chart" className="navbar-brand">
            Chart
          </Link>
          <Link to="/about" className="navbar-brand">
            Tentang
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
