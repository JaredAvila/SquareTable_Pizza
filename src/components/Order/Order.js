import React from "react";

import Pizza from "../Pizza/Pizza";

import * as styles from "./Order.module.css";

const Order = props => {
  let ingArr = [];
  let pizzaIngs;
  if (props.pizza.ingredients) {
    pizzaIngs = props.pizza.ingredients;
    ingArr = Object.keys(pizzaIngs);
    if (ingArr.length === 1) {
      ingArr = ingArr.join(" ");
    } else if (ingArr.length === 2) {
      ingArr = ingArr.join(" and ");
    } else {
      let temp = ingArr.pop();
      ingArr.push(" and");
      ingArr = ingArr.join(", ");
      ingArr = ingArr + " " + temp;
    }
  } else {
    ingArr = "cheese";
    pizzaIngs = { pepperoni: false };
  }
  return (
    <div className={styles.Order}>
      <div>
        <p>
          <span style={{ textTransform: "capitalize" }}>
            {props.pizza.size}
          </span>{" "}
          {ingArr} pizza
        </p>
        <p>
          Price: <strong>${props.pizza.price}</strong>
        </p>
      </div>
      <div className={styles.Pizzcontainer}>
        <Pizza ingredients={pizzaIngs} />
      </div>
    </div>
  );
};

export default Order;
