import { takeEvery, put } from "redux-saga/effects";
import { getProductsFromService, setProductsToLocal } from "../../action/product";
import axios from "axios";

function* loadData(action) {
  const { data } = yield axios.get("http://localhost:3005/goods");
  yield put(setProductsToLocal(data));
}

export default function* product() {
  yield takeEvery(getProductsFromService, loadData);
}
