import React from "react";

import * as styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../hoc/AuxComponent/AuxComponent";

const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/specialty" exact>
        Menu
      </NavigationItem>
      <NavigationItem link="/cart" exact>
        Cart
      </NavigationItem>
      {!props.isAuth ? (
        <NavigationItem link="/auth">Login</NavigationItem>
      ) : (
        <Aux>
          <NavigationItem link="/orders">Past Orders</NavigationItem>
          <NavigationItem link="/logout">Logout</NavigationItem>
        </Aux>
      )}
    </ul>
  );
};

export default NavigationItems;
