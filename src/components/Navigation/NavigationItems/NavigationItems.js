import React from "react";

import * as styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/builder" exact>
        Menu
      </NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!props.isAuth ? (
        <NavigationItem link="/auth">Login</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
