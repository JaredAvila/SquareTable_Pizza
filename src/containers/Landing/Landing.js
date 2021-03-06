import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./Landing.module.css";
import lax from "lax.js";

import CityLine from "../../assets/FrontPage/skyline.png";
import Pizza from "../../assets/FrontPage/Pizza.png";
import Specialty from "../../assets/FrontPage/signature.png";
import Create from "../../assets/FrontPage/create.png";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button/Button";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.cityRef = React.createRef();
    this.titleRef = React.createRef();
    this.orderBtnRef = React.createRef();
    this.specialRef = React.createRef();
    this.createRef = React.createRef();

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
    const specialty = this.specialRef.current;
    const create = this.createRef.current;
    lax.addElement(pizza);
    lax.addElement(title);
    lax.addElement(orderBtn);
    lax.addElement(specialty);
    lax.addElement(create);
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
              to="/specialty"
              className={styles.OrderBtn}
              data-lax-translate-y="0 0, 500 -200"
              ref={this.orderBtnRef}
              data-lax-opacity="0 0, 500 1"
            >
              <Button buttonType="Red">ORDER NOW</Button>
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
            data-lax-translate-y="0 0, 700 -600"
            ref={this.cityRef}
          />
        </div>
        <div id="specialAnch" className={styles.specialAnch}></div>
        <div
          ref={this.specialRef}
          className={styles.Specialty}
          data-lax-translate-x="0 0, 900 -900"
          data-lax-anchor="#specialAnch"
        >
          <img src={Specialty} alt="Specialty Pizzas" />
          <h2>Specialty Pizzas</h2>
          <NavLink className={styles.SpecialtyMenuBtn} to="/specialty">
            <Button buttonType="Red">View Menu</Button>
          </NavLink>
        </div>
        <div id="createAnch" className={styles.createAnch}></div>
        <div
          ref={this.createRef}
          className={styles.CreateYourOwn}
          data-lax-translate-x="0 0, 900 900"
          data-lax-anchor="#createAnch"
        >
          <img src={Create} alt="Create Your Own Pizza" />
          <h2>Create Your Own Pizza</h2>
          <NavLink to="/builder" className={styles.CreateMenuBtn}>
            <Button buttonType="Red">Start Building</Button>
          </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
