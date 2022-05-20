import { Product,ProductsCategory } from "../types";

export const ACTION_SET_DARK_MODE = "ACTION_SET_DARK_MODE";
export const ACTION_LOAD_PRODUCTS = "ACTION_LOAD_PRODUCTS";
export const ACTION_LOAD_PRODUCTS_SUCCESS = "ACTION_LOAD_PRODUCTS_SUCCESS";
export const ACTION_LOAD_PRODUCTS_ERROR = "ACTION_LOAD_PRODUCTS_ERROR";

export const ACTION_ADD_TO_BASKET = "ACTION_ADD_TO_BASKET";
export const ACTION_REMOVE_FROM_BASKET = "ACTION_REMOVE_FROM_BASKET";


export interface ActionSetDarkMode {
  type: typeof ACTION_SET_DARK_MODE | string;
  payload: boolean;
}

export interface ActionLoadProducts {
  type: typeof ACTION_LOAD_PRODUCTS | string
  payload: {
    loading?: boolean
  }
}

export interface ActionLoadProductsSuccess {
  type: typeof ACTION_LOAD_PRODUCTS_SUCCESS
  payload: {
    loading: boolean,
    data: ProductsCategory[],
    error: string
  }
}

export interface ActionLoadProductsError {
  type: typeof ACTION_LOAD_PRODUCTS_ERROR
  payload: {
    loading: boolean,
    error: string,
    data:ProductsCategory[]
  }
}

export interface ActionBasket {
  type: typeof ACTION_ADD_TO_BASKET | typeof ACTION_REMOVE_FROM_BASKET | string;
  payload?: Product;
}

export type UiAction = ActionSetDarkMode;

export type LoadProductAction = ActionLoadProducts;

export type GlobalAction = UiAction;

export type GlobalProductAction=LoadProductAction | ActionLoadProductsSuccess | ActionLoadProductsError;
export type GlobalBastionAction=ActionBasket;

export type UiState = Readonly<{
  darkMode: boolean;
}>;

export type ProductsCategoryState = Readonly<{
  loading: Boolean,
  data: ProductsCategory[],
  error: string
}>

export type GlobalState = Readonly<{
  uiState: UiState,
  productsCategoryState: ProductsCategoryState,
  BasketState: Product[];
}>;

