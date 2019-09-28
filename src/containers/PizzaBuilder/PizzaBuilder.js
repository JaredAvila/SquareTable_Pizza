import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";

export default class PizzaBuilder extends Component {
  state = {
    ingredients: {
      pepperoni: false,
      bacon: false,
      sausage: false,
      ham: true,
      chicken: false,
      beef: false,
      peppers: false,
      mushrooms: false,
      olives: false,
      onions: true,
      tomatoes: false,
      pineapple: true
    }
  };

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients} />
        <div>Pizza Controls</div>
      </Aux>
    );
  }
}
