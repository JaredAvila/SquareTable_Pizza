import * as actionTypes from "./actionTypes";

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
