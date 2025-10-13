/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = ({ className, to }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="site-logo-3">
        <img className="bena-favicon-figma-2" alt="Bena favicon figma" />

        <div className="text-wrapper-19">Abena Boadi-Agyemang</div>
      </div>

      <div className="text-wrapper-20">Home</div>

      <Link className="text-wrapper-21" to={to}>
        Research
      </Link>

      <div className="text-wrapper-22">Projects</div>

      <div className="text-wrapper-23">Art</div>
    </div>
  );
};

DivWrapper.propTypes = {
  to: PropTypes.string,
};
