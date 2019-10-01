import React, { Component } from "react";
import * as styles from "./Layout.module.css";

import Aux from "../AuxComponent/AuxComponent";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleSideDrawerHandler} />
        <SideDrawer
          open={this.state.sideDrawerOpen}
          close={this.sideDrawerCloseHandler}
        />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
