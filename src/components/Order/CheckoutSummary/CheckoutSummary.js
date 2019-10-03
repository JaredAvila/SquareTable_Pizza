import React from "react";
import Pizza from "../../Pizza/Pizza";
import Button from "../../UI/Button/Button";

import * as styles from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div className={styles.PizzaContainer}>
        <Pizza ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
