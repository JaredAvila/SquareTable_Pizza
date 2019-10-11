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
  }
}
