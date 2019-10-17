import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";
import * as styles from "./SpecialtyMenu.module.css";

import Aux from "../../hoc/AuxComponent/AuxComponent";
import SpecialtyPizza from "../../components/SpecialtyPizza/SpecialtyPizza";
import Spinner from "../../components/UI/Spinner/Spinner";

class SpecialtyMenu extends Component {
  componentDidMount() {
    this.props.onPizzasInit();
    this.props.onPricesInit();
  }
  render() {
    let output;
    if (this.props.pizzas) {
      output = (
        <Aux>
          <h1>specialty menu</h1>
          {this.props.pizzas.map(pizza => {
            return <SpecialtyPizza key={pizza.name} pizzaData={pizza} />;
          })}
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
    onPricesInit: () => dispatch(actions.initPrices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialtyMenu);
