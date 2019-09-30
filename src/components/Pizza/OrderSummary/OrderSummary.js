import React from "react";

import * as styles from "./OrderSummary.module.css";
import Aux from "../../../hoc/AuxComponent";

const OrderSummary = props => {
  let markUp;
  const toppingSummary = props.toppings.map(top => {
    return (
      <li className={styles.Item} key={top}>
        {top}
      </li>
    );
  });
  if (props.toppings.length === 0) {
    markUp = <p className={styles.Type}>A {props.size} cheese pizza</p>;
  } else {
    markUp = <p className={styles.Type}>A {props.size} pizza with:</p>;
  }

  return (
    <Aux>
      <h3 className={styles.OrderSummary}>Your Order</h3>
      {markUp}
      <ul className={styles.List}>{toppingSummary}</ul>
      <p className={styles.Checkout}>
        Your total: ${props.price}. Continue to chekcout?
      </p>
    </Aux>
  );
};

export default OrderSummary;
