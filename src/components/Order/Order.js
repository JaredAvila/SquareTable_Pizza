import React from "react";

import filterObject from "../../helper/filterObject";

import * as styles from "./Order.module.css";

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
  console.log(props);
  return (
    <div className={styles.Order}>
      <p>Ordered by: {props.delivery.name}</p>
      <p>Delivered to:</p>
      <p>{props.delivery.street}</p>
      <p>
        {props.delivery.city}, {props.delivery.state}
      </p>
      <p>{props.delivery.zipcode}</p>
      {props.pizzas.map((pizza, i) => {
        return (
          <div key={i} className={styles.Pizzas}>
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
    </div>
  );
};

export default Order;
