import { takeEvery, put } from 'redux-saga/effects'
import { getProducts, setProducts } from '../../action/product'
import axios from "axios";

function* loadData(action) {
  const { data } = yield axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put(setProducts(data))
}

export default function* product() {
  yield takeEvery(getProducts, loadData)
}
