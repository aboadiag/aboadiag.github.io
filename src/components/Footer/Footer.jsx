import PropTypes from "prop-types";
import React from "react";
import styles from "./Footer.module.css";

export const Footer = ({
  className = "",
  scholarHref = "https://scholar.google.com/citations?hl=en&user=OYnusysAAAAJ",
  githubHref = "https://github.com/aboadiag",
  style = {},
}) => {

  const currentYear = new Date().getFullYear();
  
  return (
    // CRITICAL FIX 1: Use styles.footer for CSS Module targeting
    <footer className={`${styles.footer} ${className}`} style={style}>
      {/* CRITICAL FIX 2: Use styles['contact-bar-scholar'] for scoping */}
      <section className={styles['contact-bar-scholar']}>
        {/* CRITICAL FIX 3: Use styles['group-6'] for scoping */}
        <div className={styles['group-6']}>
          
          {/* Contact Block */}
          {/* Note: Corrected 'text-wrapper-93ssa' to 'text-wrapper-93' to match typical CSS naming */}
          <div className={styles['text-wrapper-94']}>Contact</div> 
          <div className={styles['text-wrapper-93']}>
            <a href="mailto:aboadiag@andrew.cmu.edu" 
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Contact information: Abena's professional email"

            >
              aboadiag@andrew.cmu.edu
            </a>
          </div>


          {/* Google Scholar Block - Link wraps the entire clickable area */}
          <a
            className={styles['link-google-scholar']} 
            href={scholarHref}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Google Scholar profile for Abena Boadi-Agyemang"
          >
            <div className={styles['google-scholar-logo']} aria-hidden="true">
              <img className={styles['vector-4']} alt="Google Scholar Logo Vector" src="/img/vector-32.svg" />
              <img className={styles['vector-5']} alt="" src="/img/vector-33.svg" />
              <img className={styles['vector-6']} alt="" src="/img/vector-34.svg" />
              <img className={styles['vector-7']} alt="" src="/img/vector-35.svg" />
            </div>
            
            {/* text-wrapper-95 for the visible label. */}
            <div className={styles['text-wrapper-95']}>read my work</div>
          </a>

          
          {/* GitHub Block - Link wraps the entire clickable area */}
          <a
            className={styles['img-wrapper']} // Reusing .img-wrapper as the link container
            href={githubHref}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub profile for Abena Boadi-Agyemang"
          >
            <img className={styles['vector-8']} alt="GitHub Logo Vector" src="/img/vector-36.svg" />
            
            {/* text-wrapper-96 for the visible label. */}
            <div className={styles['text-wrapper-96']}>visit my repos</div>
          </a>
          
          {/* Redundant elements from the original structure are now consolidated into the <a> tags */}


          {/* NEW: Credits Section */}
          <div className={styles['credits']}>
            © {currentYear} Abena Boadi-Agyemang ♥
          </div>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  scholarHref: PropTypes.string,
  githubHref: PropTypes.string,
  style: PropTypes.object,
};