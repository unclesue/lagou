import axios, { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import {
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
  SearchProductAction,
  searchProductSuccess,
  SEARCH_PRODUCT,
} from "../actions/product";
import { Product } from "../models/product";

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response: AxiosResponse = yield axios.get<Product[]>(
    `${process.env.REACT_APP_API_URL}/products`,
    {
      params: { sortBy, order, limit },
    }
  );
  yield put(getProductSuccess(response.data, sortBy));
}

function* handleSearchProduct({ category, search }: SearchProductAction) {
  let response: AxiosResponse = yield axios.get<Product[]>(
    `${process.env.REACT_APP_API_URL}/products/search`,
    {
      params: { category, search },
    }
  );
  yield put(searchProductSuccess(response.data));
}

export default function* product() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
}
