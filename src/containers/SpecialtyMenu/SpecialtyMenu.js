import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";

import SpecialtyPizza from "../../components/SpecialtyPizza/SpecialtyPizza";

class SpecialtyMenu extends Component {
  componentDidMount() {
    this.props.onPizzasInit();
    this.props.onPricesInit();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>specialty menu</h1>
        <SpecialtyPizza />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prices: state.pizzaBuilder.prices,
    pizzas: state.specialty.pizzas
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
