import React from "react";
import PropTypes from "prop-types";

import * as styles from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.toggle} />
      <div className={styles.Logo}>
        <Logo />
        <h1>CityLine</h1>
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  toggle: PropTypes.func
};

export default Toolbar;
