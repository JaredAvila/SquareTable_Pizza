import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.module.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: ""
    }
  };

  onSubmitHanlder = e => {
    e.preventDefault();
    console.log("you submitted the form");
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact information</h4>
        <form action="">
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={styles.Input}
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <p>Address:</p>
          <input
            className={styles.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={styles.Input}
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            className={styles.Input}
            type="text"
            name="state"
            placeholder="State ex/ CA"
            maxLength="2"
          />
          <input
            className={styles.Input}
            type="text"
            name="zip"
            placeholder="Zip Code"
          />
          <Button clicked={this.onSubmitHanlder} buttonType="Success">
            Place Order
          </Button>
        </form>
      </div>
    );
  }
}
