import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import * as actions from "../../store/actions/";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  getCartHandler = () => {
    const cart = this.props.onGetCart();
    console.log(cart);
  };
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (
        <div style={{ padding: "100px" }}>
          {this.props.orders.map(order => {
            return (
              <Order
                key={order.id}
                pizza={order.orderData}
                customer={order.customerData}
              />
            );
          })}
        </div>
      );
    }
    return orders;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
