import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  getProductsFromServiceCart,
  setProductsToLocalCart,
  setProductToLocalCart,
  setProductToServiceCart,
} from "../../action/cart";

// 获取服务器购物车商品
function* handleGetProductsFromServiceCart(action) {
  const { data } = yield axios.get("http://localhost:3005/cart");
  yield put(setProductsToLocalCart(data));
}

// 添加商品到服务器购物车
function* handleSetProductToServiceCart(action) {
  const { data } = yield axios.post("http://localhost:3005/cart/add", {
    gid: action.payload,
  });
  yield put(setProductToLocalCart(data))
}

export default function* cart() {
  yield takeEvery(getProductsFromServiceCart, handleGetProductsFromServiceCart);
  yield takeEvery(setProductToServiceCart, handleSetProductToServiceCart);
}
