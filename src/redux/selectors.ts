import { Selector } from "react-redux";
import { GlobalState, ProductsCategoryState } from "./types";
import { Product, ProductsCategory } from "../types";

export const getDarkMode: Selector<GlobalState, boolean> = state => state.uiState.darkMode;

export const getProductCategories: Selector<GlobalState, ProductsCategory[]> = state => state.productsCategoryState.data;
export const getProductCategoriesState: Selector<GlobalState, ProductsCategoryState> = state => state.productsCategoryState;
export const getBasketItems: Selector<GlobalState, Product[]> = state => state.BasketState;