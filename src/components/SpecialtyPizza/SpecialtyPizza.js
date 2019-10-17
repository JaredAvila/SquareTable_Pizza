import React from "react";
import * as styles from "./SpecialtyPizza.module.css";

import Pizza from "../Pizza/Pizza";
import Button from "../UI/Button/Button";

const SpecialtyPizza = props => {
  return (
    <div className={styles.SpecialtyPizza}>
      <h1>{props.pizzaData.name}</h1>
      <div>
        <div className={styles.Pizza}>
          <Pizza ingredients={props.pizzaData.ingredients} />
        </div>
        <Button buttonType="Red">Order</Button>
      </div>
    </div>
  );
};

export default SpecialtyPizza;
