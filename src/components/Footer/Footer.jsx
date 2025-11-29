import PropTypes from "prop-types";
import React from "react";
import styles from "./Footer.module.css";

export const Footer = ({
  className = "",
  scholarHref = "https://scholar.google.com/citations?hl=en&user=OYnusysAAAAJ",
  githubHref = "https://github.com/aboadiag",
  style = {},           // NEW optional inline style prop
}) => {
  return (
    <footer className={`footer ${className}`} style={style}>
      <section className="contact-bar-scholar">
        <div className="group-6">
          <div className="text-wrapper-93ssa">     
            <a href="mailto:aboadiag@andrew.cmu.edu" style={{ textDecoration: "none", color: "inherit" }}>
              aboadiag@andrew.cmu.edu
              </a>
              </div>
          <div className="text-wrapper-94">Contact</div>

          <div className="link-google-scholar">
            <div className="google-scholar-logo" aria-hidden="true">
              <img className="vector-4" alt="" src="/img/vector-32.svg" />
              <img className="vector-5" alt="" src="/img/vector-33.svg" />
              <img className="vector-6" alt="" src="/img/vector-34.svg" />
              <img className="vector-7" alt="" src="/img/vector-35.svg" />
            </div>

            <a
              className="https-scholar-google"
              href={scholarHref}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Google Scholar profile for Abena Boadi-Agyemang"
            >
              Google Scholar
            </a>
          </div>

          <div className="text-wrapper-95">read my work</div>

          <div className="img-wrapper">
            <img className="vector-8" alt="" src="/img/vector-36.svg" />
          </div>

          <a
            className="https-github-com-3"
            href={githubHref}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub profile for Abena Boadi-Agyemang"
          >
              GitHub Profile
          </a>

          <div className="text-wrapper-96">visit my repos</div>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  scholarHref: PropTypes.string,
  githubHref: PropTypes.string,
  style: PropTypes.object, // added
};
