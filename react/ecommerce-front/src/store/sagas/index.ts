import { all } from "redux-saga/effects";
import auth from "./auth";
import category from "./category";
import product from "./product";

export default function* sagas() {
  yield all([auth(), category(), product()]);
}
