import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    pepperoni: false,
    bacon: false,
    sausage: false,
    beef: false,
    ham: false,
    chicken: false,
    tomatoes: false,
    peppers: false,
    olives: false,
    mushrooms: false,
    onions: false,
    pineapple: false
  },
  prices: {
    pepperoni: 0.75,
    bacon: 1,
    sausage: 0.75,
    beef: 0.75,
    ham: 0.75,
    chicken: 1,
    tomatoes: 1,
    peppers: 0.5,
    olives: 0.5,
    mushrooms: 0.5,
    onions: 0.5,
    pineapple: 1,
    small: 7.99,
    medium: 9.99,
    large: 11.99,
    ExtraLarge: 13.99
  },
  totalPrice: 9.99,
  currentSize: "medium"
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
    default:
      return state;
  }
};

export default reducer;
