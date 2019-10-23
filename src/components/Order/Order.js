import React from "react";

import filterObject from "../../helper/filterObject";

import * as styles from "./Order.module.css";
import Aux from "../../hoc/AuxComponent/AuxComponent";

const pizzaToppings = pizza => {
  if (pizza.toppings) {
    if (
      pizza.toppings[0] === "allmeat" ||
      pizza.toppings[0] === "combo" ||
      pizza.toppings[0] === "veggie" ||
      pizza.toppings[0] === "bbqchicken" ||
      pizza.toppings[0] === "hawaiian"
    ) {
      return pizza.toppings[0];
    } else {
      let pizzaIngs = filterObject(pizza.toppings);
      let ingArr = Object.values(pizzaIngs);
      if (ingArr.length === 1) {
        return ingArr.join(" ");
      } else if (ingArr.length === 2) {
        return ingArr.join(" and ");
      } else {
        let temp = ingArr.pop();
        ingArr.push(" and");
        ingArr = ingArr.join(", ");
        return ingArr + " " + temp;
      }
    }
  } else {
    return "cheese";
  }
};

const Order = props => {
  return (
    <Aux>
      {props.pizzas.map(pizza => {
        return (
          <div key={Math.random() * (3000 - 1) + 1} className={styles.Order}>
            <div>
              <p style={{ textTransform: "capitalize" }}>
                {pizza.size} {pizzaToppings(pizza)} pizza
              </p>
              <p>
                Price: <strong>${pizza.price}</strong>
              </p>
            </div>
          </div>
        );
      })}
    </Aux>
  );
};

export default Order;
