import React, { Component } from "react";
import * as actions from "../../store/actions/";
import * as styles from "./ShoppingCart.module.css";
import { displayOrder } from "../../helper/displayOrder";

import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/AuxComponent/AuxComponent";

class ShoppingCart extends Component {
  state = {
    pizzas: null,
    ordering: false,
    completed: false,
    login: false
  };

  componentDidMount() {
    this.props.onInitPurchase();
    const cartPizzas = this.props.onFetchCart();
    this.setState({ pizzas: cartPizzas });
  }

  checkoutContinuedHandler = () => {
    this.setState({ ordering: true });
  };

  checkoutCancelledHandler = () => {
    this.setState({ ordering: false, completed: false, login: false });
  };

  clearCartHandler = () => {
    this.props.onClearCart();
    this.setState({ pizzas: null });
  };

  calcTotal = () => {
    let total = 0;
    this.state.pizzas.forEach(pizza => {
      total += pizza.price;
    });
    return total;
  };

  seeMenuHandler = () => {
    this.props.history.push("/specialty");
  };

  placeOrderHandler = () => {
    const order = {
      pizzas: this.state.pizzas,
      userId: localStorage.getItem("userId")
    };
    this.props.onPurchase(order);
    this.setState({ ordering: false, completed: true });
  };
  orderFinishedHandler = () => {
    this.clearCartHandler();
    this.props.history.push("/");
  };

  loginHandler = () => {
    this.props.onSetAuthRedirectPath("/cart");
    this.props.history.push("/auth", { building: true });
  };

  render() {
    let markup = null;
    let totalPrice = 0;
    if (this.state.pizzas) {
      markup = displayOrder(this.state.pizzas);
      totalPrice = this.calcTotal();
    } else {
      markup = <h3>No orders in your shopping cart</h3>;
    }

    let orderCheckout = (
      <div>
        <p className={styles.FinalTotal}>Your total is: ${totalPrice}</p>
        <Button clicked={this.loginHandler} buttonType="Primary">
          LOGIN
        </Button>
        <Button clicked={this.checkoutCancelledHandler} buttonType="Success">
          CONTINUE AS GUEST
        </Button>
      </div>
    );
    if (this.props.isAuthenticated) {
      orderCheckout = (
        <div>
          <p className={styles.FinalTotal}>Your total is: ${totalPrice}</p>
          <Button clicked={this.placeOrderHandler} buttonType="Primary">
            PLACE ORDER
          </Button>
          <Button clicked={this.checkoutCancelledHandler} buttonType="Danger">
            CANCEL
          </Button>
        </div>
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.ordering}
          modalClosed={this.checkoutCancelledHandler}
        >
          {orderCheckout}
        </Modal>
        <Modal
          show={this.state.completed}
          modalClosed={this.checkoutCancelledHandler}
        >
          <div>
            <p className={styles.FinalTotal}>
              Thank you! Your pizza is on its way
            </p>
            <Button clicked={this.orderFinishedHandler} buttonType="Primary">
              HOME
            </Button>
          </div>
        </Modal>
        <div className={styles.ShoppingCart}>
          <h1 className={styles.Title}>Your order</h1>
          {markup}
          <h6>Total: ${totalPrice}</h6>
          <hr />
          {this.state.pizzas ? (
            <Aux>
              <Button
                clicked={this.checkoutContinuedHandler}
                buttonType="Primary"
              >
                CHECKOUT
              </Button>
              <Button clicked={this.clearCartHandler} buttonType="Danger">
                CLEAR SHOPPING CART
              </Button>
            </Aux>
          ) : (
            <Button buttonType="Yellow" clicked={this.seeMenuHandler}>
              Menu
            </Button>
          )}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    purchased: state.order.purchased,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onPurchase: orderData => dispatch(actions.purchasedPizza(orderData)),
    onFetchCart: () => dispatch(actions.getCart()),
    onClearCart: () => dispatch(actions.clearCart()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
