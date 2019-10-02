import React from "react";
import PropTypes from "prop-types";

import * as styles from "./Backdrop.module.css";

const Backdrop = props =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;

Backdrop.propTypes = {
  clicked: PropTypes.func
};

export default Backdrop;
