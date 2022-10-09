import axios, { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import {
  FilterProductAction,
  filterProductSuccess,
  FILTER_PRODUCT,
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
  SearchProductAction,
  searchProductSuccess,
  SEARCH_PRODUCT,
} from "../actions/product";
import { Product } from "../models/product";

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response: AxiosResponse<Product[]> = yield axios.get(
    `${process.env.REACT_APP_API_URL}/products`,
    {
      params: { sortBy, order, limit },
    }
  );
  yield put(getProductSuccess(response.data, sortBy));
}

function* handleSearchProduct({ category, search }: SearchProductAction) {
  let response: AxiosResponse<Product[]> = yield axios.get(
    `${process.env.REACT_APP_API_URL}/products/search`,
    {
      params: { category, search },
    }
  );
  yield put(searchProductSuccess(response.data));
}

function* handleFilterProduct(action: FilterProductAction) {
  let response: AxiosResponse<{ size: number; data: Product[] }> =
    yield axios.post(
      `${process.env.REACT_APP_API_URL}/products/filter`,
      action.payload
    );
  yield put(filterProductSuccess(response.data, action.payload.skip));
}

export default function* product() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct);
}
