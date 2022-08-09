import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  deleteCartFromLocal,
  deleteCartFromService,
  getCartsFromService,
  setCartsToLocal,
  setCartToLocal,
  setCartToService,
  updateCartFromService,
} from "../../action/cart";

// 获取服务器购物车商品
function* handlegetCartsFromService(action) {
  const { data } = yield axios.get("http://localhost:3005/cart");
  yield put(setCartsToLocal(data));
}

// 添加商品到服务器购物车
function* handlesetCartToService(action) {
  const { data } = yield axios.post("http://localhost:3005/cart/add", {
    gid: action.payload,
  });
  yield put(setCartToLocal(data));
}

// 删除商品
function* handleDeleteCartFromService(action) {
  yield axios.delete("http://localhost:3005/cart/delete", {
    params: { cid: action.payload },
  });
  yield put(deleteCartFromLocal(action.payload));
}

// 更新商品数量
function* handleUpdateCartFromService({ payload }) {
  const { data } = yield axios.put("http://localhost:3005/cart", {
    cid: payload.cart.id,
    count: payload.count,
  });
  yield put(setCartToLocal(data));
}

export default function* cart() {
  yield takeEvery(getCartsFromService, handlegetCartsFromService);
  yield takeEvery(setCartToService, handlesetCartToService);
  yield takeEvery(deleteCartFromService, handleDeleteCartFromService);
  yield takeEvery(updateCartFromService, handleUpdateCartFromService);
}
