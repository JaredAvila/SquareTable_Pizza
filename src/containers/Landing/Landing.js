import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./Landing.module.css";
import lax from "lax.js";
import ReactDOM from "react-dom";

import CityLine from "../../assets/FrontPage/skyline.png";
import Pizza from "../../assets/FrontPage/Pizza.png";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.cityRef = React.createRef();
    this.titleRef = React.createRef();
    this.orderBtnRef = React.createRef();

    lax.setup();

    document.addEventListener(
      "scroll",
      function(x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  componentDidMount() {
    const pizza = this.cityRef.current;
    const title = this.titleRef.current;
    const orderBtn = this.orderBtnRef.current;
    lax.addElement(pizza);
    lax.addElement(title);
    lax.addElement(orderBtn);
  }

  render() {
    return (
      <div className={styles.Landing}>
        <div className={styles.Container}>
          <h1
            ref={this.titleRef}
            data-lax-translate-y="0 0, 300 300"
            className={styles.CityLineTitle}
          >
            CityLine Pizza
          </h1>
          <div className={styles.OrderBtnContainer}>
            <NavLink
              to="/builder"
              className={styles.OrderBtn}
              data-lax-translate-y="0 0, 500 -200"
              ref={this.orderBtnRef}
              data-lax-opacity="0 0, 500 1"
            >
              ORDER NOW
            </NavLink>
          </div>

          <img
            className={styles.CityLineImg}
            src={CityLine}
            alt="CityLine Pizza"
          />
          <img
            src={Pizza}
            className={styles.Pizza}
            alt="Pizza Logo"
            data-lax-translate-y="0 0, 900 -600"
            ref={this.cityRef}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
