// NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; 

export const NavBar = ({ className }) => {
  return (
    <nav
      className={`${styles['nav-bar']} ${className || ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Logo Section - Redirects to Home */}
      <Link 
        to="/" 
        className={styles['site-logo-link']} 
        aria-label="Return to home page"
      >
      {/* Logo Section */}
      <div className={styles['site-logo']}>
        <img
          className={styles['bena-favicon-figma']}
          alt="Site logo – sketch of Abena's side profile face with her initials, AB"
          src="/img/benab-favicon-196x196.svg"
        />
        <span className={styles['text-wrapper-4']}>
          Abena Boadi-Agyemang
        </span>
      </div>
      </Link>

      {/* Navigation Links Grouped Together */}
      <div className={styles['nav-links']}>
        <Link className={styles['nav-link-item']} to="/">
          Home
        </Link>

        <Link className={styles['nav-link-item']} to="/research">
          Research
        </Link>

        <Link className={styles['nav-link-item']} to="/projects">
          Projects
        </Link>

        <Link className={styles['nav-link-item']} to="/artpage">
          Art
        </Link>
      </div>
    </nav>
  );
};