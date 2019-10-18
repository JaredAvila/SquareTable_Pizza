import React, { Component } from "react";
import axios from "../../axios-orders";
import filterObject from "../../helper/filterObject";
import { connect } from "react-redux";

import * as styles from "./PizzaBuilder.module.css";

import Aux from "../../hoc/AuxComponent/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";
import * as actions from "../../store/actions/";

// let PRICES = {};

class PizzaBuilder extends Component {
  state = {
    size: {
      small: false,
      medium: true,
      large: false,
      ExtraLarge: false
    },
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
    this.props.onInitPrices();
    this.props.onResetPriceAndSize();
  }

  addIngredientHandler = type => {
    this.props.onIngredientUpdated(type);
    let newPrice;
    if (!this.props.ings[type]) {
      newPrice = this.props.totalPrice + this.props.prices[type];
    } else {
      newPrice = this.props.totalPrice - this.props.prices[type];
    }
    newPrice = parseFloat(newPrice.toFixed(2));
    this.props.onPriceUpdated(newPrice);
  };
  sizeSelectHandler = size => {
    const updatedSize = {
      ...this.state.size
    };
    let newPrice;
    for (let check in this.state.size) {
      if (updatedSize[check]) {
        updatedSize[check] = !updatedSize[check];
        newPrice = this.props.totalPrice - this.props.prices[check];
      }
    }
    updatedSize[size] = !this.state.size[size];
    newPrice = newPrice + this.props.prices[size];
    newPrice = parseFloat(newPrice.toFixed(2));
    this.props.onPriceUpdated(newPrice);
    this.props.onSizeUpdated(size);
    this.setState({
      size: updatedSize
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const filteredObj = filterObject(this.props.ings);
    const toppings = Object.keys(filteredObj).map(topping => topping);
    const newPizza = {
      price: this.props.totalPrice,
      size: this.props.size,
      toppings
    };
    this.props.onAddToCart(newPizza);
    this.props.history.push("/cart");
  };
  purchaseAddToCartHandler = () => {
    const filteredObj = filterObject(this.props.ings);
    const toppings = Object.keys(filteredObj).map(topping => topping);
    const newPizza = {
      price: this.props.totalPrice,
      size: this.props.size,
      toppings
    };
    this.props.onAddToCart(newPizza);
    this.setState({ purchasing: false });
  };

  render() {
    let pizza = this.props.error ? (
      <p>Something went wrong. =(</p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;
    if (this.props.ings && this.props.prices) {
      const filteredObj = filterObject(this.props.ings);
      const toppings = Object.keys(filteredObj).map(topping => topping);
      pizza = (
        <div className={styles.PizzaBuilderContainer}>
          <div className={styles.PizzaContainer}>
            <Pizza ingredients={this.props.ings} />
          </div>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            sizeChanged={this.sizeSelectHandler}
            disabled={this.props.ings}
            size={this.state.size}
            price={this.props.totalPrice}
            purchase={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </div>
      );
      orderSummary = (
        <OrderSummary
          toppings={toppings}
          price={this.props.totalPrice}
          size={this.props.size}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseAddToCart={this.purchaseAddToCartHandler}
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
        <h1 className={styles.Title}>Create Your Own Pizza</h1>
        {pizza}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    prices: state.pizzaBuilder.prices,
    size: state.pizzaBuilder.currentSize,
    totalPrice: state.pizzaBuilder.totalPrice,
    error: state.pizzaBuilder.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientUpdated: name => dispatch(actions.updateIngredient(name)),
    onSizeUpdated: size => dispatch(actions.updateSize(size)),
    onPriceUpdated: price => dispatch(actions.updatePrice(price)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPrices: () => dispatch(actions.initPrices()),
    onResetPriceAndSize: () => dispatch(actions.resetPrice()),
    onAddToCart: pizza => dispatch(actions.addToCart(pizza))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(PizzaBuilder, axios));
