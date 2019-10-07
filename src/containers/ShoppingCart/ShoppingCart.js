import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

export default class ShoppingCart extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
    size: ""
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const toppings = {};
    let price;
    let size;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else if (param[0] === "size") {
        size = param[1];
      } else {
        toppings[param[0]] = true;
      }
    }
    this.setState({ ingredients: toppings, totalPrice: price, size: size });
  }
  checkoutContinuedHandler = () => {
    this.props.history.replace("/cart/contact-data");
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              size={this.state.size}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
