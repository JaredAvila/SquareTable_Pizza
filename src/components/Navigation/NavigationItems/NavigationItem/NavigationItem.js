import React from "react";
import PropTypes from "prop-types";

import * as styles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default NavigationItem;
