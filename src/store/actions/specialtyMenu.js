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
        const names = Object.keys(res.data);
        const pizzas = [];
        names.forEach(pizza => {
          pizzas.push({
            name: pizza,
            ingredients: res.data[pizza].ingredients
          });
        });
        dispatch(fetchSpecialtyPizzasSuccess(pizzas));
      })
      .catch(err => {
        dispatch(fetchSpecialtyPizzasFail(err));
      });
  };
};
