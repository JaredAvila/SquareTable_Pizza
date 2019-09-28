import React, { Component } from "react";

import Aux from "../../hoc/AuxComponent";
import Pizza from "../../components/Pizza/Pizza";

export default class PizzaBuilder extends Component {
  render() {
    return (
      <Aux>
        <Pizza />
        <div>Pizza Controls</div>
      </Aux>
    );
  }
}
