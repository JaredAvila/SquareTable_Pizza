import React from "react";
import * as styles from "./Layout.module.css";

import Aux from "../../hoc/AuxComponent";
import Toolbar from "../Navigation/Toolbar/Toolbar"

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
