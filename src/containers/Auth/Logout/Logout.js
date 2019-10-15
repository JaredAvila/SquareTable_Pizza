import React, { Component } from "react";
import * as actions from "../../../store/actions/";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
    this.props.onClearOrders();
  }
  render() {
    return <Redirect to="/auth" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onClearOrders: () => dispatch(actions.clearOrders())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
