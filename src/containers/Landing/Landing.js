import React from "react";
import * as styles from "./Landing.module.css";

import CityLine from "../../assets/FrontPage/skyline.png";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.Container}>
        <h1 className={styles.CityLineTitle}>CityLine Pizza</h1>
        <img
          className={styles.CityLineImg}
          src={CityLine}
          alt="CityLine Pizza"
        />
      </div>
    </div>
  );
};

export default Landing;
