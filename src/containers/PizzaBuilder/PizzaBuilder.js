import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";

export default class PizzaBuilder extends Component {
  state = {
    ingredients: {
      pepperoni: false,
      bacon: false,
      sausage: false,
      ham: false,
      chicken: false,
      beef: false,
      peppers: false,
      mushrooms: false,
      olives: false,
      onions: false,
      tomatoes: false,
      pineapple: false
    }
  };

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}
