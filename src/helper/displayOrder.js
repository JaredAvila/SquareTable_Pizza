import React from "react";
import Button from "../components/UI/Button/Button";

export const displayOrder = pizzas => {
  return pizzas.map(pizza => {
    let rando = Math.random() * (7000 - 1) + 1;
    const toppingSummary = pizza.toppings.map(top => {
      return (
        <li style={{ textTransform: "capitalize" }} key={top}>
          {top}
        </li>
      );
    });
    let name;
    switch (pizza.toppings.length) {
      case 0:
        name = <p>A {pizza.size} Cheese pizza</p>;
        break;
      case 1:
        if (
          pizza.toppings[0] === "bbqchicken" ||
          pizza.toppings[0] === "combo" ||
          pizza.toppings[0] === "allmeat" ||
          pizza.toppings[0] === "veggie" ||
          pizza.toppings[0] === "hawaiian"
        ) {
          name = (
            <p style={{ textTransform: "capitalize" }}>
              A {pizza.size} {pizza.toppings[0]} pizza
            </p>
          );
        } else {
          name = (
            <div>
              <p>A {pizza.size} pizza with:</p>
              <ul>{toppingSummary}</ul>
            </div>
          );
        }
        break;
      default:
        name = (
          <div>
            <p>A {pizza.size} pizza with:</p>
            <ul>{toppingSummary}</ul>
          </div>
        );
        break;
    }
    return (
      <article key={rando}>
        {name}{" "}
        <p>
          <span>
            Price: <strong>${pizza.price}</strong>
          </span>
        </p>
      </article>
    );
  });
};
