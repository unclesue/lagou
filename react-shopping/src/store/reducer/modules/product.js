import { handleActions } from "redux-actions";
import { setProductsToLocal } from "../../action/product";

const initialState = [];

export const product = handleActions({
  [setProductsToLocal]: (state, action) => action.payload,
}, initialState);
