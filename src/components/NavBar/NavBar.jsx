import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavBar = ({ className }) => {
  return (
    <nav
      className={`nav-bar ${className}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="site-logo">
        <img
          className="bena-favicon-figma"
          alt="Site logo – sketch of Abena's face"
          src="/img/bena-favicon-figma-1.svg"
        />

        {/* Branding should NEVER be <h1> */}
        <span className="text-wrapper-4 site-logo-text">
          Abena Boadi-Agyemang
        </span>
      </div>

      <Link className="text-wrapper-5" to="/">
        Home
      </Link>

      <Link className="text-wrapper-6" to="/research">
        Research
      </Link>

      <Link className="text-wrapper-7" to="/projects">
        Projects
      </Link>

      <Link className="text-wrapper-8" to="/artpage">
        Art
      </Link>
    </nav>
  );
};
