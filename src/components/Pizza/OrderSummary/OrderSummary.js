import React from "react";

import Aux from "../../../hoc/AuxComponent";

const OrderSummary = props => {
  let markUp;
  const toppingSummary = props.toppings.map(top => {
    return <li key={top}>{top}</li>;
  });
  if (props.toppings.length === 0) {
    markUp = <p>A {props.size} cheese pizza</p>;
  } else {
    markUp = <p>A {props.size} pizza with:</p>;
  }

  return (
    <Aux>
      <h3>Your Order</h3>
      {markUp}
      <ul>{toppingSummary}</ul>
      <p>Continue to chekcout?</p>
    </Aux>
  );
};

export default OrderSummary;
