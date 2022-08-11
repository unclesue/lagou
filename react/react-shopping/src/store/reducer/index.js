import { combineReducers } from "redux";
import { product } from "./modules/product";
import { cart } from "./modules/cart";

export default combineReducers({
  product,
  cart
});
