import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/" component={PizzaBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
