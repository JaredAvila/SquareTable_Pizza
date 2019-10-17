import React from "react";
import * as styles from "./SpecialtyPizza.module.css";

import Pizza from "../Pizza/Pizza";

const SpecialtyPizza = props => {
  //   console.log(props.pizzaData.ingredients);
  return (
    <div>
      <h1>{props.pizzaData.name}</h1>
      <div className={styles.Pizza}>
        <Pizza ingredients={props.pizzaData.ingredients} />
      </div>
    </div>
  );
};

export default SpecialtyPizza;
