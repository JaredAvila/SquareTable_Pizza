import React from "react";

import * as styles from "./Input.module.css";

const Input = props => {
  let inputEl;
  switch (props.elementType) {
    case "textarea":
      inputEl = (
        <textarea
          className={styles.InputEl}
          {...props.elementConfig}
          value={props.value}
        ></textarea>
      );
      break;
    default:
      inputEl = (
        <input
          className={styles.InputEl}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label} htmlFor={props.labelFor}>
        {props.label}
      </label>
      {inputEl}
    </div>
  );
};

export default Input;
