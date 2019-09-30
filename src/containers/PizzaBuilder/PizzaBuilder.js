import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";

const PRICES = {
  small: 7.99,
  medium: 9.99,
  large: 11.99,
  ExtraLarge: 13.99,
  pepperoni: 0.75,
  bacon: 1.0,
  sausage: 0.75,
  ham: 0.75,
  chicken: 1.0,
  beef: 0.75,
  peppers: 0.5,
  mushrooms: 0.5,
  olives: 0.5,
  onions: 0.5,
  tomatoes: 1.0,
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
      medium: true,
      large: false,
      ExtraLarge: false
    },
    totalPrice: 9.99,
    currentSize: "medium",
    purchasing: false
  };

  addIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = !this.state.ingredients[type];
    let newPrice;
    if (!this.state.ingredients[type]) {
      newPrice = this.state.totalPrice + PRICES[type];
    } else {
      newPrice = this.state.totalPrice - PRICES[type];
    }
    newPrice = parseFloat(newPrice.toFixed(2));
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };
  sizeSelectHandler = size => {
    const updatedSize = {
      ...this.state.size
    };
    let newPrice;
    for (let check in this.state.size) {
      if (updatedSize[check]) {
        updatedSize[check] = !updatedSize[check];
        newPrice = this.state.totalPrice - PRICES[check];
      }
    }
    updatedSize[size] = !this.state.size[size];
    newPrice = newPrice + PRICES[size];
    newPrice = parseFloat(newPrice.toFixed(2));
    const newSize = size;
    this.setState({
      size: updatedSize,
      totalPrice: newPrice,
      currentSize: newSize
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const filteredObj = Object.keys(this.state.ingredients).reduce((p, c) => {
      if (this.state.ingredients[c]) p[c] = this.state.ingredients[c];
      return p;
    }, {});
    const toppings = Object.keys(filteredObj).map(topping => topping);
    console.log(toppings);
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary
            toppings={toppings}
            price={this.state.totalPrice}
            size={this.state.currentSize}
          />
        </Modal>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          sizeChanged={this.sizeSelectHandler}
          disabled={this.state.ingredients}
          size={this.state.size}
          price={this.state.totalPrice}
          purchase={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
