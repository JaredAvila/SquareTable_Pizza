import React from "react";
// import PropTypes from "prop-types";

import Aux from "../../../../hoc/AuxComponent";

import * as styles from "./BuildControl.module.css";

const BuildControl = props => {
  let ingBtn;
  let sizeBtn;
  if (props.btnType === "size") {
    if (!props.size) {
      sizeBtn = (
        <Aux>
          <div className={styles.SizeLabel}>{props.label}</div>
          <button className={styles.Size} onClick={props.sizeHandler}>
            <div className={styles.NotSelected}></div>
          </button>
        </Aux>
      );
    } else {
      sizeBtn = (
        <Aux>
          <div className={styles.SizeLabel}>{props.label}</div>
          <button className={styles.Size} onClick={props.sizeHandler}>
            <div className={styles.Selected}></div>
          </button>
        </Aux>
      );
    }
  } else {
    if (props.disabled) {
      ingBtn = (
        <Aux>
          <div className={styles.Label}>{props.label}</div>
          <button className={styles.Remove} onClick={props.added}>
            Remove
          </button>
        </Aux>
      );
    } else if (!props.disabled) {
      ingBtn = (
        <Aux>
          <div className={styles.Label}>{props.label}</div>
          <button className={styles.Add} onClick={props.added}>
            Add
          </button>
        </Aux>
      );
    }
  }

  return (
    <div className={styles.BuildControl}>
      {sizeBtn}
      {ingBtn}
    </div>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
