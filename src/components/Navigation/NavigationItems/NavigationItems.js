import React from "react";

import * as styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Pizza Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
