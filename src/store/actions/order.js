import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchasedPizzaSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_PIZZA_SUCCESS,
    orderId: id,
    orderData
  };
};

export const purchasedPizzaFail = error => {
  return {
    type: actionTypes.PURCHASE_PIZZA_FAIL,
    error
  };
};

export const purchasedPizzaStart = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_START
  };
};

export const purchasedPizza = orderData => {
  return dispatch => {
    dispatch(purchasedPizzaStart());
    axios
      .post("/order.json", orderData)
      .then(res => {
        console.log(res.data);
        dispatch(purchasedPizzaSuccess(res.data.name, orderData));
      })
      .catch(err => {
        dispatch(purchasedPizzaFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFailed = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    axios
      .get("/order.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })

      .catch(err => {
        dispatch(fetchOrdersFailed(err));
      });
  };
};
