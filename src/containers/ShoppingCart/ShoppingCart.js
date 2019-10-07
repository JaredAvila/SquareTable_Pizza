import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

export default class ShoppingCart extends Component {
  state = {
    ingredients: {}
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const toppings = {};
    for (let param of query.entries()) {
      toppings[param[0]] = true;
    }
    console.log(toppings);
    this.setState({ ingredients: toppings });
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
      </div>
    );
  }
}
