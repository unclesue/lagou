import { takeEvery, put, delay } from "redux-saga/effects";
import { hide } from "../../actions/modal";
import { HIDEMODAL_ASYNC } from "../../const/modal";

function* loadData(action) {
  yield delay(2000);
  yield put(hide(action.payload));
}

export default function* modalSage() {
  yield takeEvery(HIDEMODAL_ASYNC, loadData);
}
