import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchProductSuccess, fetchProductError } from "./actions";
import * as productService from "../services/productService";
import { ACTION_LOAD_PRODUCTS } from "./types";

export function* fetchProductSaga() {
  try {
    const data = yield call(productService.fetchProducts);
    yield put(fetchProductSuccess(data));
  } catch (e) {
    yield put(fetchProductError(e.message));
  }
}


export function* watchFetchProduct() {
  yield takeLatest(ACTION_LOAD_PRODUCTS, fetchProductSaga);
}

export default watchFetchProduct;