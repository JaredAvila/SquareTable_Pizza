import React from "react";
// import PropTypes from "prop-types";

import * as styles from "./BuildControl.module.css";

const BuildControl = props => {
  let ingBtn;
  let sizeBtn;
  if (props.btnType === "size") {
    if (!props.size) {
      sizeBtn = (
        <button className={styles.Add} onClick={props.sizeHandler}>
          Add
        </button>
      );
    } else {
      sizeBtn = (
        <button className={styles.Remove} onClick={props.sizeHandler}>
          Remove
        </button>
      );
    }
  } else {
    if (props.disabled) {
      ingBtn = (
        <button className={styles.Remove} onClick={props.added}>
          Remove
        </button>
      );
    } else if (!props.disabled) {
      ingBtn = (
        <button className={styles.Add} onClick={props.added}>
          Add
        </button>
      );
    }
  }

  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      {sizeBtn}
      {ingBtn}
    </div>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
