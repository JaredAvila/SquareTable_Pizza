import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import * as styles from "./BuildControls.module.css";

const controls = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Sausage", type: "sausage" },
  { label: "Bacon", type: "bacon" },
  { label: "Ham", type: "ham" },
  { label: "Chicken", type: "chicken" },
  { label: "Ground Beef", type: "beef" },
  { label: "Bell Peppers", type: "peppers" },
  { label: "Mushrooms", type: "mushrooms" },
  { label: "Red Onion", type: "onions" },
  { label: "Black Olives", type: "olives" },
  { label: "Tomatoes", type: "tomatoes" },
  { label: "Pineapple", type: "pineapple" }
];

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      {controls.map(control => (
        <BuildControl
          added={() => props.ingredientAdded(control.type)}
          key={control.label}
          label={control.label}
        />
      ))}
    </div>
  );
};

export default BuildControls;
