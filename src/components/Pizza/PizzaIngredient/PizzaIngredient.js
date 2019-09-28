import React, { Component } from "react";
import PropTypes from "prop-types";

import * as styles from "./PizzaIngredient.module.css";

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "crust":
        ingredient = <div className={styles.Crust}></div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case "sauce":
        ingredient = <div className={styles.Sauce}></div>;
        break;
      case "pepperoni":
        ingredient = <div className={styles.Pepperoni}></div>;
        break;
      case "sausage":
        ingredient = <div className={styles.Sausage}></div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}></div>;
        break;
      case "ham":
        ingredient = <div className={styles.Ham}></div>;
        break;
      case "chicken":
        ingredient = <div className={styles.Chicken}></div>;
        break;
      case "beef":
        ingredient = <div className={styles.Beef}></div>;
        break;
      case "peppers":
        ingredient = <div className={styles.Peppers}></div>;
        break;
      case "mushrooms":
        ingredient = <div className={styles.Mushrooms}></div>;
        break;
      case "olives":
        ingredient = <div className={styles.Olives}></div>;
        break;
      case "onions":
        ingredient = <div className={styles.Onions}></div>;
        break;
      case "tomatos":
        ingredient = <div className={styles.Tomatos}></div>;
        break;
      case "garlic":
        ingredient = <div className={styles.Garlic}></div>;
        break;
      case "pineapple":
        ingredient = <div className={styles.Pineapple}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

PizzaIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default PizzaIngredient;
