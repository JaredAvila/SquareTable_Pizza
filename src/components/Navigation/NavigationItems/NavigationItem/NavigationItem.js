import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import * as styles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        to={props.link}
        activeClassName={styles.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default NavigationItem;
