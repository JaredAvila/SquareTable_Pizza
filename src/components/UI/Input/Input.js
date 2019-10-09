import React from "react";

import * as styles from "./Input.module.css";

const Input = props => {
  const inputClasses = [styles.InputEl];

  if (props.invalid && props.touched) {
    inputClasses.push(styles.Invalid);
  }

  let inputEl;
  switch (props.elementType) {
    case "textarea":
      inputEl = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        ></textarea>
      );
      break;
    default:
      inputEl = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
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
