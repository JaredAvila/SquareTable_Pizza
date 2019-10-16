import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./Landing.module.css";

import CityLine from "../../assets/FrontPage/skyline.png";
import Pizza from "../../assets/FrontPage/Pizza.png";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.Container}>
        <h1 className={styles.CityLineTitle}>CityLine Pizza</h1>
        <NavLink to="/builder" className={styles.OrderBtn}>
          ORDER NOW
        </NavLink>
        <img
          className={styles.CityLineImg}
          src={CityLine}
          alt="CityLine Pizza"
        />
        <img src={Pizza} className={styles.Pizza} alt="Pizza Logo" />
      </div>
    </div>
  );
};

export default Landing;
