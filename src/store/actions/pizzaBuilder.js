import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const updateIngredient = name => {
  return {
    type: actionTypes.UPDATE_INGREDIENT,
    name
  };
};

export const updateSize = size => {
  return {
    type: actionTypes.UPDATE_SIZE,
    size
  };
};

export const updatePrice = price => {
  return {
    type: actionTypes.UPDATE_PRICE,
    price
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  };
};

export const setPrices = prices => {
  return {
    type: actionTypes.SET_PRICES,
    prices
  };
};

export const fetchFailed = () => {
  return {
    type: actionTypes.FETCH_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://squaretable-1984f.firebaseio.com/toppings.json")
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(err => {
        dispatch(fetchFailed());
      });
  };
};

export const initPrices = () => {
  return dispatch => {
    axios
      .get("https://squaretable-1984f.firebaseio.com/prices.json")
      .then(res => {
        dispatch(setPrices(res.data));
      })
      .catch(err => {
        dispatch(fetchFailed());
      });
  };
};

// axios
//
//   .then(res => {
//     PRICES = res.data;
//   })
//   .catch(err => {
//     this.setState({ error: true });
//   });
