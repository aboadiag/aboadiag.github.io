/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styles from "./Group.module.css";

export const Group = ({
  property1,
  className,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  text = "Resume",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      // CRITICAL FIX: Reference module classes using 'styles.' or 'styles[]'
      // styles.group: The hashed base class.
      // styles[state.property1]: Dynamic hashed class (e.g., styles['default'] or styles['variant-2']).
      // className: Allows external overrides passed via props.
      className={`${styles.group} ${styles[state.property1]} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {/* Reference the hashed class name for 'rectangle' */}
      <div className={`${styles.rectangle} ${rectangleClassName}`} />

      {/* Reference the hashed class name for 'rectangle-2' (using bracket notation for the dash) */}
      <div className={`${styles['rectangle-2']} ${rectangleClassNameOverride}`} />

      {/* Reference the hashed class name for 'resume' */}
      <div className={`${styles.resume} ${divClassName}`}>{text}</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };

    case "click":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
