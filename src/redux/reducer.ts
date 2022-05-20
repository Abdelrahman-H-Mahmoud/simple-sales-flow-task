import {
  GlobalBastionAction,
  ACTION_LOAD_PRODUCTS,
  ACTION_SET_DARK_MODE,
  ACTION_ADD_TO_BASKET,
  ACTION_REMOVE_FROM_BASKET,
  ACTION_LOAD_PRODUCTS_ERROR,
  ACTION_LOAD_PRODUCTS_SUCCESS,
  GlobalAction,
  GlobalProductAction,
  UiState,
  ProductsCategoryState,
} from "./types";

import { Product } from "../types";


export const INITIAL_STATE: UiState = {
  darkMode: false
};

export const INITIAL_PRODUC_CATEGORY_STATE: ProductsCategoryState = {
  loading: false,
  data: [],
  error: ""
};

export function uiStateReducer(state: UiState = INITIAL_STATE, action: GlobalAction): UiState {
  switch (action.type) {
    case ACTION_SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
}


export function productStateReducer(state: ProductsCategoryState = INITIAL_PRODUC_CATEGORY_STATE, action: GlobalProductAction) {
  switch (action.type) {
    case ACTION_LOAD_PRODUCTS:
      return { ...state, ...action.payload }
    case ACTION_LOAD_PRODUCTS_SUCCESS:
      return { ...state, ...action.payload }

    case ACTION_LOAD_PRODUCTS_ERROR:
      return { ...state, ...action.payload }

    default:
      return state;
  }
}

export function BasketStateReducer(state: Product[] = [], action: GlobalBastionAction) {
  switch (action.type) {
    case ACTION_ADD_TO_BASKET:
      return [...state, action.payload];
    case ACTION_REMOVE_FROM_BASKET:
      return state.filter(x => x.name !== action?.payload?.name);
    default:
      return state;
  }
}