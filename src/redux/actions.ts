import {
  ACTION_SET_DARK_MODE,
  ActionSetDarkMode,
  ActionLoadProducts,
  ACTION_LOAD_PRODUCTS,
  ACTION_LOAD_PRODUCTS_ERROR,
  ACTION_LOAD_PRODUCTS_SUCCESS,
  ActionLoadProductsError,
  ActionLoadProductsSuccess,
  ActionBasket,
  ACTION_ADD_TO_BASKET,
  ACTION_REMOVE_FROM_BASKET
} from "./types";

import { Product, ProductsCategory } from "../types";

export function setDarkMode(darkMode: boolean): ActionSetDarkMode {
  return {
    type: ACTION_SET_DARK_MODE,
    payload: darkMode
  };
}

export function fetchProducts(): ActionLoadProducts {
  return {
    type: ACTION_LOAD_PRODUCTS,
    payload: {
      loading: true
    }
  }
}


export function fetchProductSuccess(data: ProductsCategory[]): ActionLoadProductsSuccess {
  return {
    type: ACTION_LOAD_PRODUCTS_SUCCESS,
    payload: {
      loading: false,
      data: data,
      error: ""
    }
  }
}

export function fetchProductError(error: string): ActionLoadProductsError {
  return {
    type: ACTION_LOAD_PRODUCTS_ERROR,
    payload: {
      loading: false,
      error: error,
      data: []
    }
  }
}

export function addToBasket(product: Product): ActionBasket {
  return {
    type: ACTION_ADD_TO_BASKET,
    payload: product
  }
}

export function removeFromBasket(product: Product): ActionBasket {
  return {
    type: ACTION_REMOVE_FROM_BASKET,
    payload: product
  }
}