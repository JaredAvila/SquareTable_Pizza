import React from "react";

import PizzaLogo from "../../assets/PizzBuilder/Logo.png";
import * as styles from "./Logo.module.css";

const Logo = props => (
  <div className={styles.Logo}>
    <img src={PizzaLogo} alt="SquareTable Pizza" />
  </div>
);

export default Logo;
