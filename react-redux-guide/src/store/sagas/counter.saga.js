import { takeEvery, put, delay } from "redux-saga/effects";
import { increment } from "../actions/counter.action";
import { INCREMENT_ASYNC } from "../const/couner.const";

function* loadData(action) {
  yield delay(2000);
  yield put(increment(action.payload));
}

export default function* counterSage() {
  yield takeEvery(INCREMENT_ASYNC, loadData);
}
