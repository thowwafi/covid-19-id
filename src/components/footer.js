import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaHospitalSymbol,
  FaDatabase,
  FaChartBar,
  FaMap
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="header-text mt-4">
      <div className="footer box-shadow">
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <Link to="/" className="navbar-brand" style={{ marginLeft: "1rem" }}>
            <div className="text-center">
              <FaDatabase></FaDatabase>
              <Text>Data</Text>
            </div>
          </Link>
          <Link
            to="/chart"
            className="navbar-brand"
            style={{ marginLeft: "1rem" }}
          >
            <div className="text-center">
              <FaChartBar></FaChartBar>
              <Text>Grafik</Text>
            </div>
          </Link>
          <Link
            to="/peta"
            className="navbar-brand"
            style={{ marginLeft: "1rem" }}
          >
            <div className="text-center">
              <FaMap></FaMap>
              <Text>Peta</Text>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

const Text = styled.div`
  font-size: 12px;
`;

export default Footer;
