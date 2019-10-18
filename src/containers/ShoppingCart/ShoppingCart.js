import React, { Component } from "react";
import * as actions from "../../store/actions/";
import * as styles from "./ShoppingCart.module.css";
import { displayOrder } from "../../helper/displayOrder";

import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";

class ShoppingCart extends Component {
  state = {
    pizzas: null
  };

  componentDidMount() {
    this.props.onInitPurchase();
    const cartPizzas = this.props.onFetchCart();
    this.setState({ pizzas: cartPizzas });
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/cart/contact-data");
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  clearCartHandler = () => {
    this.props.onClearCart();
    this.setState({ pizzas: null });
  };
  render() {
    let markup = null;
    if (this.state.pizzas) {
      markup = displayOrder(this.state.pizzas);
    }

    return (
      <div className={styles.ShoppingCart}>
        <h1 className={styles.Title}>Your order</h1>
        {markup}
        <Button clicked={this.clearCartHandler} buttonType="Danger">
          CLEAR SHOPPING CART
        </Button>
        <Button clicked={this.checkoutCancelledHandler} buttonType="Primary">
          CHECKOUT
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    purchased: state.order.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onFetchCart: () => dispatch(actions.getCart()),
    onClearCart: () => dispatch(actions.clearCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
