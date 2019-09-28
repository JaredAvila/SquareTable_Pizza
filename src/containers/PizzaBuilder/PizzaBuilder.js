import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";

const PRICES = {
  small: 7.99,
  medium: 8.99,
  large: 9.99,
  xLarge: 10.99,
  pepperoni: 0.75,
  bacon: 1,
  sausage: 0.75,
  ham: 0.75,
  chicken: 1,
  beef: 0.75,
  peppers: 0.5,
  mushrooms: 0.5,
  olives: 0.5,
  onions: 0.5,
  tomatoes: 1,
  pineapple: 1
};

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
    },
    size: {
      small: false,
      medium: false,
      large: false,
      xLarge: false
    },
    totalPrice: 0
  };

  addIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = !this.state.ingredients[type];
    const newPrice = this.state.totalPrice + PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  removeIngredientHandler = type => {};

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}
