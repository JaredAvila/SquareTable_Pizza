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
import * as actionTypes from "../../store/actions";

// let PRICES = {};

class PizzaBuilder extends Component {
  state = {
    size: {
      small: false,
      medium: true,
      large: false,
      ExtraLarge: false
    },
    totalPrice: 9.99,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get("https://squaretable-1984f.firebaseio.com/toppings.json")
    //   .then(res => {
    //     this.setState({ ingredients: res.data });
    //   })
    //   .catch(err => {
    //     this.setState({ error: true });
    //   });
    // axios
    //   .get("https://squaretable-1984f.firebaseio.com/prices.json")
    //   .then(res => {
    //     PRICES = res.data;
    //   })
    //   .catch(err => {
    //     this.setState({ error: true });
    //   });
  }

  addIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = !this.state.ingredients[type];
    let newPrice;
    if (!this.state.ingredients[type]) {
      newPrice = this.state.totalPrice + this.props.prices[type];
    } else {
      newPrice = this.state.totalPrice - this.props.prices[type];
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
        newPrice = this.state.totalPrice - this.props.prices[check];
      }
    }
    updatedSize[size] = !this.state.size[size];
    newPrice = newPrice + this.props.prices[size];
    newPrice = parseFloat(newPrice.toFixed(2));
    // const newSize = size;
    this.props.onSizeUpdated(size);
    this.setState({
      size: updatedSize,
      totalPrice: newPrice
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = toppings => {
    const queryParams = [];
    toppings.forEach(topping => {
      queryParams.push(encodeURIComponent(topping));
    });
    queryParams.push("price=" + this.state.totalPrice);
    queryParams.push("size=" + this.state.currentSize);
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
    if (this.props.ings) {
      const filteredObj = filterObject(this.props.ings);
      const toppings = Object.keys(filteredObj).map(topping => topping);
      pizza = (
        <div className={styles.PizzaBuilderContainer}>
          <div className={styles.PizzaContainer}>
            <Pizza ingredients={this.props.ings} />
          </div>

          <BuildControls
            ingredientAdded={this.props.onIngredientUpdated}
            sizeChanged={this.sizeSelectHandler}
            disabled={this.props.ings}
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
          size={this.props.size}
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    prices: state.prices,
    size: state.currentSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientUpdated: name =>
      dispatch({ type: actionTypes.UPDATE_INGREDIENT, name }),
    onSizeUpdated: size => dispatch({ type: actionTypes.UPDATE_SIZE, size })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(PizzaBuilder, axios));
