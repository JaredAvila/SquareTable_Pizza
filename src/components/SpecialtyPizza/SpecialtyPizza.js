import React, { Component } from "react";
import * as styles from "./SpecialtyPizza.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";

import Pizza from "../Pizza/Pizza";
import Button from "../UI/Button/Button";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/AuxComponent/AuxComponent";
import Spinner from "../UI/Spinner/Spinner";

class SpecialtyPizza extends Component {
  state = {
    purchasing: false
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ purchasing: false });
    const pizza = {
      price: this.props.price,
      size: "large",
      toppings: [this.props.name]
    };
    this.props.onAddToCart(pizza);
  };

  purchaseStartHandler = () => {
    this.setState({ purchasing: true });
    this.props.updatePrice(this.props.price);
  };

  render() {
    let orderSummary = (
      <OrderSummary
        toppings={[this.props.name]}
        price={this.props.price}
        size={"large"}
        key={this.props.name}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );
    if (this.props.loading) {
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
        <div className={styles.SpecialtyPizza}>
          <h1>{this.props.pizzaData.name}</h1>
          <div className={styles.Pizza}>
            <Pizza ingredients={this.props.pizzaData.ingredients} />
          </div>
          <p className={styles.Price}>${this.props.price}</p>
          <Button buttonType="Red" clicked={this.purchaseStartHandler}>
            Order
          </Button>
        </div>
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: pizza => dispatch(actions.addToCart(pizza))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialtyPizza);
