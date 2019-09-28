import React from "react";
// import PropTypes from "prop-types";

import * as styles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Add} onClick={props.added}>
        Add
      </button>
      <button className={styles.Remove}>Remove</button>
    </div>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
