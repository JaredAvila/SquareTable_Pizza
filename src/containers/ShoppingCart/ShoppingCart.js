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
    ordering: false
  };

  componentDidMount() {
    this.props.onInitPurchase();
    const cartPizzas = this.props.onFetchCart();
    this.setState({ pizzas: cartPizzas });
  }

  checkoutContinuedHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ ordering: true });
    } else {
      this.props.history.goBack();
    }
  };

  checkoutCancelledHandler = () => {
    this.setState({ ordering: false });
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
    this.props.history.push("/");
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

    return (
      <Aux>
        <Modal
          show={this.state.ordering}
          modalClosed={this.checkoutCancelledHandler}
        >
          <div>
            <p className={styles.FinalTotal}>Your total is: ${totalPrice}</p>
            <Button clicked={this.placeOrderHandler} buttonType="Primary">
              PLACE ORDER
            </Button>
            <Button clicked={this.checkoutCancelledHandler} buttonType="Danger">
              CANCEL
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
    onClearCart: () => dispatch(actions.clearCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
