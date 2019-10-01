import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/AuxComponent/AuxComponent";

import * as styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  let sideDrawerClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    sideDrawerClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
