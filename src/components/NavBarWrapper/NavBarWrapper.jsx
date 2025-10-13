/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavBarWrapper = ({ className, to }) => {
  return (
    <div className={`nav-bar-wrapper ${className}`}>
      <div className="site-logo-2">
        <img className="img" alt="Bena favicon figma" />

        <div className="text-wrapper-9">Abena Boadi-Agyemang</div>
      </div>

      <div className="text-wrapper-10">Home</div>

      <div className="text-wrapper-11">Research</div>

      <Link className="text-wrapper-12" to={to}>
        Projects
      </Link>

      <div className="text-wrapper-13">Art</div>
    </div>
  );
};

NavBarWrapper.propTypes = {
  to: PropTypes.string,
};
