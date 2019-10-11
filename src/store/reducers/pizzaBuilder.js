import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  prices: null,
  totalPrice: 9.99,
  currentSize: "medium",
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.name]: !state.ingredients[action.name]
        }
      };
    case actionTypes.UPDATE_SIZE:
      return {
        ...state,
        currentSize: action.size
      };
    case actionTypes.UPDATE_PRICE:
      return {
        ...state,
        totalPrice: action.price
      };
    case actionTypes.RESET_PRICE:
      return {
        ...state,
        totalPrice: 9.99,
        currentSize: "medium"
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false
      };
    case actionTypes.SET_PRICES:
      return {
        ...state,
        prices: action.prices,
        error: false
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
