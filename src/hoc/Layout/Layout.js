import React, { Component } from "react";
import { connect } from "react-redux";

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
        <Toolbar
          toggle={this.toggleSideDrawerHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          open={this.state.sideDrawerOpen}
          close={this.sideDrawerCloseHandler}
          isAuth={this.props.isAuthenticated}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
