import React from "react";

import * as styles from "./Order.module.css";

const Order = props => {
  return (
    <div className={styles.Order}>
      <p>Large Pepperoni</p>
      <p>
        Price: <strong>$12.99</strong>
      </p>
    </div>
  );
};

export default Order;
