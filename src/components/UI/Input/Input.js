import React from "react";

import * as styles from "./Input.module.css";

const Input = props => {
  let inputEl;
  switch (props.inputtype) {
    case "textarea":
      inputEl = <textarea className={styles.InputEl} {...props}></textarea>;
      break;
    default:
      inputEl = <input className={styles.InputEl} {...props} />;
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
