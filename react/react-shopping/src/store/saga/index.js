import { all } from "redux-saga/effects";
import product from "./modules/product";
import cart from "./modules/cart";

export default function* sage() {
  yield all([product(), cart()]);
}
