import React from "react";
import PropTypes from "prop-types";

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

const sizeControls = [
  { label: "Small", type: "small" },
  { label: "Medium", type: "medium" },
  { label: "Large", type: "large" },
  { label: "X-Large", type: "ExtraLarge" }
];

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p className={styles.Total}>
        Current total:<strong> ${props.price}</strong>
      </p>
      <h4>Please select a size</h4>
      <div className={styles.sizeControl}>
        {sizeControls.map(control => (
          <BuildControl
            key={control.label}
            label={control.label}
            size={props.size[control.type]}
            sizeHandler={() => props.sizeChanged(control.type)}
            btnType="size"
          />
        ))}
      </div>
      <h4>Choose your toppings</h4>
      <div className={styles.toppingControl}>
        {controls.map(control => (
          <BuildControl
            added={() => props.ingredientAdded(control.type)}
            key={control.label}
            label={control.label}
            disabled={props.disabled[control.type]}
            btnType="ingredient"
          />
        ))}
      </div>
      <button className={styles.OrderButton} onClick={props.purchase}>
        ADD TO CART
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  price: PropTypes.number,
  sizeChanged: PropTypes.func,
  ingredientAdded: PropTypes.func,
  disabled: PropTypes.object,
  purchase: PropTypes.func
};

export default BuildControls;
