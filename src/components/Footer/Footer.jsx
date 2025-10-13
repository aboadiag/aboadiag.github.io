/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({
  className,
  githubIcon = "/img/github-icon-1-2.svg",
  href,
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="text-wrapper">aboadiag@andrew.cmu.edu</div>

      <div className="div">Contact</div>

      <div className="text-wrapper-2">read my work</div>

      <img className="github-icon" alt="Github icon" src={githubIcon} />

      <a
        className="https-github-com"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        XXXXXXXX
        <br />
        XXXXXXXX
        <br />
        XXXXXXXX
        <br />
        XXXXXXXX
      </a>

      <div className="text-wrapper-3">visit my repos</div>
    </div>
  );
};

Footer.propTypes = {
  githubIcon: PropTypes.string,
  href: PropTypes.string,
};
