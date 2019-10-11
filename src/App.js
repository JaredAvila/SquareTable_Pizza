import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={PizzaBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
