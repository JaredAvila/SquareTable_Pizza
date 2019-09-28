import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";

export default class PizzaBuilder extends Component {
  state = {
    ingredients: {
      pepperoni: true,
      bacon: true,
      sausage: false,
      ham: false,
      chicken: true,
      beef: false,
      peppers: true,
      mushrooms: false,
      olives: false,
      onions: true,
      tomatoes: false,
      pinapple: false
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
