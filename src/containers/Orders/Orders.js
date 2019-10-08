import React, { Component } from "react";
import axios from "../../axios-orders";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/order.json")
      .then(res => {
        // console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })

      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => {
          return (
            <Order
              key={order.id}
              pizza={order.pizza}
              customer={order.customer}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
