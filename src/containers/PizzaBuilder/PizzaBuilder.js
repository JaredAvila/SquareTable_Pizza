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
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";

let PRICES = {};

class PizzaBuilder extends Component {
  state = {
    ingredients: null,
    size: {
      small: false,
      medium: true,
      large: false,
      ExtraLarge: false
    },
    totalPrice: 9.99,
    currentSize: "medium",
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://squaretable-1984f.firebaseio.com/toppings.json")
      .then(res => {
        this.setState({ ingredients: res.data });
      })
      .catch(err => {
        this.setState({ error: true });
      });

    axios
      .get("https://squaretable-1984f.firebaseio.com/prices.json")
      .then(res => {
        PRICES = res.data;
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

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

  purchaseContinueHandler = toppings => {
    // this.setState({ loading: true });
    // const filteredObj = filterObject(this.state.ingredients);
    // const data = {
    //   customer: {
    //     name: "Jared Avila",
    //     address: "228 Florence St.",
    //     city: "Sunnyvale",
    //     state: "CA",
    //     zip: "94086",
    //     email: "jared@gmail.com"
    //   },
    //   pizzas: [
    //     {
    //       size: this.state.currentSize,
    //       ingredients: Object.keys(filteredObj),
    //       price: this.state.totalPrice
    //     }
    //   ]
    // };
    // axios
    //   .post("/order.json", data)
    //   .then(res => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, purchasing: false });
    //   });
    const queryParams = [];
    toppings.forEach(topping => {
      queryParams.push(encodeURIComponent(topping));
    });
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/cart",
      search: "?" + queryString
    });
  };

  render() {
    let pizza = this.state.error ? (
      <p>Something went wrong. =(</p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;
    if (this.state.ingredients) {
      const filteredObj = filterObject(this.state.ingredients);
      const toppings = Object.keys(filteredObj).map(topping => topping);
      pizza = (
        <div className={styles.PizzaBuilderContainer}>
          <div className={styles.PizzaContainer}>
            <Pizza ingredients={this.state.ingredients} />
          </div>

          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            sizeChanged={this.sizeSelectHandler}
            disabled={this.state.ingredients}
            size={this.state.size}
            price={this.state.totalPrice}
            purchase={this.purchaseHandler}
          />
        </div>
      );
      orderSummary = (
        <OrderSummary
          toppings={toppings}
          price={this.state.totalPrice}
          size={this.state.currentSize}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={() => this.purchaseContinueHandler(toppings)}
        />
      );
    }
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
        {pizza}
      </Aux>
    );
  }
}

export default withErrorHandler(PizzaBuilder, axios);
