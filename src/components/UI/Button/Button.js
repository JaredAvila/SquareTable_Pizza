import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  buttonType: PropTypes.string.isRequired
};

export default Button;
