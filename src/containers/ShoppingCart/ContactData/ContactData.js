import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
          name: "name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
          name: "email"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
          name: "street"
        },
        value: ""
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City",
          name: "city"
        },
        value: ""
      },
      state: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "State",
          name: "name",
          maxLength: 2
        },
        value: ""
      },
      zip: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
          name: "zip"
        },
        value: ""
      }
    },
    loading: false
  };

  onSubmitHanlder = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const data = {
      customer: {},
      pizza: {
        size: this.props.size,
        ingredients: this.props.ingredients,
        price: this.props.price
      }
    };
    axios
      .post("/order.json", data)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <Input elementType="..." elementConfig="..." value="..." />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <p>Address:</p>
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input inputtype="input" type="text" name="city" placeholder="City" />
        <Input
          inputtype="input"
          type="text"
          name="state"
          placeholder="State ex/ CA"
          maxLength="2"
        />
        <Input
          inputtype="input"
          type="text"
          name="zip"
          placeholder="Zip Code"
        />
        <Button clicked={this.onSubmitHanlder} buttonType="Success">
          Place Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact information</h4>
        {form}
      </div>
    );
  }
}
