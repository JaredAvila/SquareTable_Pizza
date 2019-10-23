import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import * as styles from "./Orders.module.css";
import * as actions from "../../store/actions/";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (
        <div className={styles.Orders} style={{ padding: "100px" }}>
          {this.props.orders.map(order => {
            return (
              <div key={order.id} className={styles.Order}>
                <Order key={order.id} pizzas={order.pizzas} />
              </div>
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
