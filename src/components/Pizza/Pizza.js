import React from "react";

import * as styles from "./Pizza.module.css";

import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = () => {
  return (
    <div className={styles.Pizza}>
      <PizzaIngredient type="crust" />
      <PizzaIngredient type="sauce" />
      <PizzaIngredient type="cheese" />
    </div>
  );
};

export default Pizza;
