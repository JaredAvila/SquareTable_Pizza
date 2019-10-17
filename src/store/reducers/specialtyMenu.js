import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  pizzas: null,
  prices: null,
  totalPrice: 9.99,
  currentSize: "medium",
  error: false,
  loading: false
};

const fetchSpcialtyPizzasStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchSpcialtyPizzasSuccess = (state, action) => {
  return updateObject(state, { pizzas: action.pizzas, loading: false });
};

const fetchSpcialtyPizzasFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPECIALTY_PIZZAS_START:
      return fetchSpcialtyPizzasStart(state, action);
    case actionTypes.FETCH_SPECIALTY_PIZZAS_SUCCESS:
      return fetchSpcialtyPizzasSuccess(state, action);
    case actionTypes.FETCH_SPECIALTY_PIZZAS_FAIL:
      return fetchSpcialtyPizzasFail(state, action);
    default:
      return state;
  }
};

export default reducer;
