import React from "react";
import Aux from "../hoc/AuxComponent/AuxComponent";

export const displayOrder = pizzas => {
  return pizzas.map(pizza => {
    let rando = Math.random() * (7000 - 1) + 1;
    const toppingSummary = pizza.toppings.map(top => {
      return <li key={top}>{top}</li>;
    });
    let name;
    switch (pizza.toppings.length) {
      case 0:
        name = <p>A {pizza.size} cheese pizza</p>;
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
            <p>
              A {pizza.size} {pizza.toppings[0]} pizza
            </p>
          );
        } else {
          name = (
            <Aux>
              <p>A {pizza.size} pizza with:</p>
              <ul>{toppingSummary}</ul>
            </Aux>
          );
        }
        break;
      default:
        name = (
          <Aux>
            <p>A {pizza.size} pizza with:</p>
            <ul>{toppingSummary}</ul>
          </Aux>
        );
        break;
    }
    return <Aux key={rando}>{name}</Aux>;
  });
};
