import React, { Component } from "react";
import axios from "../../axios-orders";
import filterObject from "../../helper/filterObject";

import * as styles from "./PizzaBuilder.module.css";

import Aux from "../../hoc/AuxComponent/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

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

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const filteredObj = filterObject(this.state.ingredients);
    const data = {
      customer: {
        name: "Jared Avila",
        address: "228 Florence St.",
        city: "Sunnyvale",
        state: "CA",
        zip: "94086",
        email: "jared@gmail.com"
      },
      pizzas: [
        {
          size: this.state.currentSize,
          ingredients: Object.keys(filteredObj),
          price: this.state.totalPrice
        }
      ]
    };
    // console.log(data);
    axios
      .post("/order.json", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const filteredObj = filterObject(this.state.ingredients);
    const toppings = Object.keys(filteredObj).map(topping => topping);
    let orderSummary = (
      <OrderSummary
        toppings={toppings}
        price={this.state.totalPrice}
        size={this.state.currentSize}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <div className={styles.PizzaContainer}>
          <Pizza ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            sizeChanged={this.sizeSelectHandler}
            disabled={this.state.ingredients}
            size={this.state.size}
            price={this.state.totalPrice}
            purchase={this.purchaseHandler}
          />
        </div>
      </Aux>
    );
  }
}
