import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_PIZZA_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_PIZZA_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_PIZZA_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default orderReducer;
