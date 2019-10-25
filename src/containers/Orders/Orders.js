import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as styles from "./Orders.module.css";
import * as actions from "../../store/actions/";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHanlder";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      if (this.props.orders.length > 0) {
        orders = (
          <div className={styles.Orders} style={{ padding: "100px" }}>
            {this.props.orders.map(order => {
              return (
                <div key={order.id} className={styles.Order}>
                  <Order delivery={order.deliveryInfo} pizzas={order.pizzas} />
                </div>
              );
            })}
          </div>
        );
      } else {
        orders = (
          <div className={styles.Orders} style={{ padding: "100px" }}>
            <h1>You have no past orders to view.</h1>
            <NavLink to="/specialty">
              <Button buttonType="Danger">Menu</Button>
            </NavLink>
          </div>
        );
      }
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
