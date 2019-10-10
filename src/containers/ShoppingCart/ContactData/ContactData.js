import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
          name: "name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
          name: "email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
          name: "street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City",
          name: "city"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      state: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "State",
          name: "name",
          maxLength: 2
        },
        value: "",
        validation: {
          required: true,
          minLength: 2
        },
        valid: false,
        touched: false
      },
      zip: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
          name: "zip",
          maxLength: 5
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          isNumeric: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    loading: false
  };

  onSubmitHanlder = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let elId in this.state.orderForm) {
      formData[elId] = this.state.orderForm[elId].value;
    }
    const data = {
      customerData: formData,
      orderData: {
        size: this.props.size,
        ingredients: this.props.ings,
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

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (e, formElement) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[formElement]
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[formElement] = updatedFormElement;

    let formIsValid = true;
    for (let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.onSubmitHanlder}>
        {formElementsArray.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            changed={e => this.inputChangedHandler(e, el.id)}
            invalid={!el.config.valid}
            touched={el.config.touched}
          />
        ))}
        <Button
          type="submit"
          buttonType="Success"
          disabled={!this.state.formIsValid}
        >
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    size: state.currentSize,
    price: state.totalPrice
  };
};

export default connect(mapStateToProps)(ContactData);
