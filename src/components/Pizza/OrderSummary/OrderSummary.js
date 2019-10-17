import React from "react";
import PropTypes from "prop-types";

import * as styles from "./OrderSummary.module.css";
import Aux from "../../../hoc/AuxComponent/AuxComponent";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  let markUp;
  const toppingSummary = props.toppings.map(top => {
    return (
      <li className={styles.Item} key={top}>
        {top}
      </li>
    );
  });
  switch (props.toppings.length) {
    case 0:
      markUp = <p className={styles.Type}>A {props.size} cheese pizza</p>;
      break;
    case 1:
      if (
        props.toppings[0] === "bbqchicken" ||
        props.toppings[0] === "combo" ||
        props.toppings[0] === "allmeat" ||
        props.toppings[0] === "veggie" ||
        props.toppings[0] === "hawaiian"
      ) {
        markUp = (
          <p className={styles.Type}>
            A {props.size} {props.toppings[0]} pizza
          </p>
        );
      } else {
        markUp = (
          <Aux>
            <p className={styles.Type}>A {props.size} pizza with:</p>
            <ul className={styles.List}>{toppingSummary}</ul>
          </Aux>
        );
      }
      break;
    default:
      markUp = (
        <Aux>
          <p className={styles.Type}>A {props.size} pizza with:</p>
          <ul className={styles.List}>{toppingSummary}</ul>
        </Aux>
      );
      break;
  }

  return (
    <Aux>
      <h3 className={styles.OrderSummary}>Your Order</h3>
      {markUp}
      <p className={styles.Checkout}>
        Your total is: <strong>${props.price}</strong>. Continue to chekcout?
      </p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  toppings: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;
