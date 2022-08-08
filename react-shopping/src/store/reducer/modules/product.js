import { handleActions } from "redux-actions";
import { setProducts } from "../../action/product";

const initialState = [];

export const product = handleActions({
  [setProducts]: (state, action) => action.payload,
}, initialState);
