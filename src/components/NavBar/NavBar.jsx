/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavBar = ({ className, to, to1 }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <div className="site-logo">
        <img
          className="bena-favicon-figma"
          alt="Bena favicon figma"
          src="/img/bena-favicon-figma-1.svg"
        />

        <div className="text-wrapper-4">Abena Boadi-Agyemang</div>
      </div>

      <div className="text-wrapper-5">Home</div>

      <Link className="text-wrapper-6" to={to}>
        Research
      </Link>

      <Link className="text-wrapper-7" to={to1}>
        Projects
      </Link>

      <div className="text-wrapper-8">Art</div>
    </div>
  );
};

NavBar.propTypes = {
  to: PropTypes.string,
  to1: PropTypes.string,
};
