import React from "react";

import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
  return (
    <div>
      <Layout>
        <PizzaBuilder />
      </Layout>
    </div>
  );
}

export default App;
