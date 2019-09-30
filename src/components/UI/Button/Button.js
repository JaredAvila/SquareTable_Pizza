import React from "react";

import * as styles from "./Button.module.css";

const Button = props => {
  return (
    <button
      className={[styles.Button, styles[props.buttonType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
