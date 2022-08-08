import { all } from "redux-saga/effects";
import product from "./modules/product";

export default function* sage() {
  yield all([product()]);
}
