import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const fetchSpecialtyPizzasStart = () => {
  return {
    type: actionTypes.FETCH_SPECIALTY_PIZZAS_START
  };
};

export const fetchSpecialtyPizzasSuccess = pizzas => {
  return {
    type: actionTypes.FETCH_SPECIALTY_PIZZAS_SUCCESS,
    pizzas
  };
};

export const fetchSpecialtyPizzasFail = error => {
  return {
    type: actionTypes.FETCH_SPECIALTY_PIZZAS_FAIL,
    error
  };
};

export const fetchSpecialtyPizzas = () => {
  return dispatch => {
    dispatch(fetchSpecialtyPizzasStart());
    axios
      .get("/specialties.json")
      .then(res => {
        dispatch(fetchSpecialtyPizzasSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchSpecialtyPizzasFail(err));
      });
  };
};
