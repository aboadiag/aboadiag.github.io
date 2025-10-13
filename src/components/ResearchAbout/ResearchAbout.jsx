/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ResearchAbout = ({
  className,
  text = " at several top tier conferences in ACM &amp;&nbsp;&nbsp;IEEE, such as SIGACCESS, UIST, HRI, RO-MAN, and journals, such as THRI.&nbsp;&nbsp;See some of these research projects below.<br/>",
}) => {
  return (
    <div className={`research-about ${className}`}>
      <div className="text-wrapper-14">select research.</div>

      <p className="my-research-focuses">
        <span className="span">
          My research focuses on designing assistive robots and supportive
          agents.&nbsp;&nbsp;I commonly{" "}
        </span>

        <span className="text-wrapper-15">&nbsp;</span>

        <span className="text-wrapper-16">cooperatively design</span>

        <span className="span"> (“co-design) with</span>

        <span className="text-wrapper-17"> people with disabilities</span>

        <span className="span">
          {" "}
          (PwDs) who are non-professional designers to ensure more
        </span>

        <span className="text-wrapper-17"> equitable experiences</span>

        <span className="span"> with</span>

        <span className="text-wrapper-15">&nbsp;&nbsp;accessible</span>

        <span className="span"> robotic/agentic interfaces. I use </span>

        <span className="text-wrapper-16">participatory design,</span>

        <span className="span">&nbsp;</span>

        <span className="text-wrapper-16">user-centered design (UCD), </span>

        <span className="span">and </span>

        <span className="text-wrapper-16">experimental methods </span>

        <span className="span">
          in my work. <br />
          <br />
          My work has been{" "}
        </span>

        <span className="text-wrapper-18">published</span>

        <span className="span">{text}</span>
      </p>
    </div>
  );
};

ResearchAbout.propTypes = {
  text: PropTypes.string,
};
