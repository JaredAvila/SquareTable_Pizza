import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  prices: null,
  totalPrice: 9.99,
  currentSize: "medium",
  error: false
};

const updateIngredientHandler = (state, action) => {
  const updatedIngredients = updateObject(state.ingredients, {
    [action.name]: !state.ingredients[action.name]
  });
  return updateObject(state, { ingredients: updatedIngredients });
};

const updateSize = (state, action) => {
  return updateObject(state, { currentSize: action.size });
};

const updatePrice = (state, action) => {
  return updateObject(state, { totalPrice: action.price });
};

const resetPrice = (state, action) => {
  return updateObject(state, { totalPrice: 9.99, currentSize: "medium" });
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false
  });
};

const setPrices = (state, action) => {
  return updateObject(state, { prices: action.prices, error: false });
};

const fetchFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INGREDIENT:
      return updateIngredientHandler(state, action);
    case actionTypes.UPDATE_SIZE:
      return updateSize(state, action);
    case actionTypes.UPDATE_PRICE:
      return updatePrice(state, action);
    case actionTypes.RESET_PRICE:
      return resetPrice(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.SET_PRICES:
      return setPrices(state, action);
    case actionTypes.FETCH_FAILED:
      return fetchFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
