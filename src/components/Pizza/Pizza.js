import React from "react";

import * as styles from "./Pizza.module.css";

import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = props => {
  const filteredObj = Object.keys(props.ingredients).reduce((p, c) => {
    if (props.ingredients[c]) p[c] = props.ingredients[c];
    return p;
  }, {});
  const toppings = Object.keys(filteredObj).map(topping => {
    return <PizzaIngredient key={topping} type={topping} />;
  });
  return (
    <div className={styles.Pizza}>
      <PizzaIngredient type="crust" />
      {toppings}
    </div>
  );
};

export default Pizza;
