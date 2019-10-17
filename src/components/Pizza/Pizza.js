import React from "react";
import PropTypes from "prop-types";
import filterObject from "../../helper/filterObject";

import * as styles from "./Pizza.module.css";

import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = props => {
  console.log(props.ingredients);
  const filteredObj = filterObject(props.ingredients);
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

Pizza.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Pizza;
