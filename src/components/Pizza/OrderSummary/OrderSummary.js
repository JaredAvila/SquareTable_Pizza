import React from "react";
import PropTypes from "prop-types";
import { displayOrder } from "../../../helper/displayOrder";

import * as styles from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const pizza = [
    {
      toppings: props.toppings,
      size: props.size
    }
  ];
  const markUp = displayOrder(pizza);

  return (
    <div className={styles.OrderSummary}>
      <h3 className={styles.OrderSummaryTitle}>Your Order</h3>
      {markUp}
      <p className={styles.Checkout}>
        Your total is: <strong>${props.price}</strong>.
      </p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseAddToCart}>
        ADD TO CART
      </Button>
      <Button buttonType="Primary" clicked={props.purchaseContinued}>
        CHECKOUT
      </Button>
    </div>
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
