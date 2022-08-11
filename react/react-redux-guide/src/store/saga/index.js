import { all } from "redux-saga/effects";
import counterSage from "./modules/counter";
import modalSage from "./modules/modal";

export default function* sage() {
  yield all([counterSage(), modalSage()]);
}
