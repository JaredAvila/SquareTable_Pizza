import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions/";
import * as styles from "./SpecialtyMenu.module.css";

import Aux from "../../hoc/AuxComponent/AuxComponent";
import SpecialtyPizza from "../../components/SpecialtyPizza/SpecialtyPizza";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";

class SpecialtyMenu extends Component {
  componentDidMount() {
    this.props.onPizzasInit();
    this.props.onPricesInit();
  }

  updatePriceHandler = price => {
    this.props.onUpdatePrice(price);
  };

  onCreateHandler = () => {
    this.props.history.push("/builder");
  };

  render() {
    let output;
    if (this.props.pizzas && this.props.prices) {
      output = (
        <Aux>
          <div className={styles.TopMenu}>
            <h1 className={styles.Title}>specialty menu</h1>
            <Button buttonType="Yellow" clicked={this.onCreateHandler}>
              Create Your Own
            </Button>
          </div>

          <div className={styles.PizzaContainer}>
            {this.props.pizzas.map(pizza => {
              return (
                <SpecialtyPizza
                  price={parseFloat(this.props.prices[pizza.name].toFixed(2))}
                  key={pizza.name}
                  pizzaData={pizza}
                  name={pizza.name}
                  updatePrice={this.updatePriceHandler}
                />
              );
            })}
          </div>
        </Aux>
      );
    }

    if (this.props.loading) {
      output = <Spinner />;
    }
    return <div className={styles.SpecialtyMenu}>{output}</div>;
  }
}

const mapStateToProps = state => {
  return {
    prices: state.pizzaBuilder.prices,
    pizzas: state.specialty.pizzas,
    loading: state.specialty.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPizzasInit: () => dispatch(actions.fetchSpecialtyPizzas()),
    onPricesInit: () => dispatch(actions.initPrices()),
    onPurchasePizza: () => dispatch(actions.purchaseInit()),
    onUpdatePrice: price => dispatch(actions.updateSpecialtyPrice(price))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SpecialtyMenu));
