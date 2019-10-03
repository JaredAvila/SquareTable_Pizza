import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

export default class ShoppingCart extends Component {
    state = {
        ingredients: {
            pepperoni: true,
            ham: true
        }
    }
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}
