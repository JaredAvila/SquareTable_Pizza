import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent/asyncComonent";

import * as actions from "./store/actions/";

import Layout from "./hoc/Layout/Layout";
import Logout from "./containers/Auth/Logout/Logout";
import Landing from "./containers/Landing/Landing";

const asyncShoppingCart = asyncComponent(() => {
  return import("./containers/ShoppingCart/ShoppingCart");
});
const asyncOrders = asyncComponent(() => {
  return import("./containers/Orders/Orders");
});
const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});
const asyncBuilder = asyncComponent(() => {
  return import("./containers/PizzaBuilder/PizzaBuilder");
});
const asyncSpecialty = asyncComponent(() => {
  return import("./containers/SpecialtyMenu/SpecialtyMenu");
});

class App extends Component {
  componentDidMount() {
    this.props.onAuthCheck();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/builder" component={asyncBuilder} />
        <Route path="/specialty" component={asyncSpecialty} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/cart" component={asyncShoppingCart} />
        <Route path="/" component={Landing} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" component={asyncAuth} />
          <Route path="/cart" component={asyncShoppingCart} />
          <Route path="/builder" component={asyncBuilder} />
          <Route path="/specialty" component={asyncSpecialty} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Landing} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
