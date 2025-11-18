import React from "react";
import { Link } from "react-router-dom";
// CRITICAL FIX 1: Import the styles into an object named 'styles'.
import styles from "./NavBar.module.css"; 


export const NavBar = ({ className }) => {
  return (
    <nav
      // CRITICAL FIX 2: Use bracket notation for classes with dashes, or dot notation without dashes.
      // Use styles['nav-bar'] instead of the plain string "nav-bar".
      className={`${styles['nav-bar']} ${className}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* CRITICAL FIX 3: Use styles['site-logo'] */}
      <div className={styles['site-logo']}>
        <img
          className="bena-favicon-figma"
          alt="Site logo – sketch of Abena's face"
          src="/img/bena-favicon-figma-1.svg"
        />

        {/* Use styles['text-wrapper-4'] and styles['site-logo-text'] */}
        <span className={`${styles['text-wrapper-4']} ${styles['site-logo-text']}`}>
          Abena Boadi-Agyemang
        </span>
      </div>

      {/* Use styles['text-wrapper-5'] */}
      <Link className={styles['text-wrapper-5']} to="/">
        Home
      </Link>

      {/* Use styles['text-wrapper-6'] */}
      <Link className={styles['text-wrapper-6']} to="/research">
        Research
      </Link>

      {/* Use styles['text-wrapper-7'] */}
      <Link className={styles['text-wrapper-7']} to="/projects">
        Projects
      </Link>

      {/* Use styles['text-wrapper-8'] */}
      <Link className={styles['text-wrapper-8']} to="/artpage">
        Art
      </Link>
    </nav>
  );
};
