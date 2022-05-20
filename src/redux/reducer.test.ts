import {
  BasketStateReducer,
  productStateReducer,
  uiStateReducer,
  INITIAL_PRODUC_CATEGORY_STATE,
  INITIAL_STATE
} from "./reducer";

import {
  setDarkMode,
  addToBasket,
  removeFromBasket,
  fetchProducts,
  fetchProductError,
  fetchProductSuccess
} from "./actions";

import {
  ActionBasket,
  UiAction
} from "./types";
import { Product, ProductsCategory } from "../types";
describe("UI State Reducer", () => {
  it('should return the initial state', () => {
    let action: UiAction = {
      type: "",
      payload: false
    };
    expect(uiStateReducer(undefined, action)).toEqual(INITIAL_STATE)
  });

  it('should return a new state with Dark Mode On', () => {
    let action: UiAction = setDarkMode(true);
    expect(uiStateReducer(undefined, action)).toEqual({
      darkMode: true
    });
  });

  it('should return a new state with Dark Mode Off', () => {
    let action: UiAction = setDarkMode(false);
    expect(uiStateReducer(undefined, action)).toEqual({
      darkMode: false
    });
  });
});

describe("Product State Reducer", () => {
  it('should return the initial state', () => {
    expect(productStateReducer(undefined, { type: "", payload: {} })).toMatchObject(INITIAL_PRODUC_CATEGORY_STATE)
  });

  it('should return a new state with Loading:true', () => {
    let action = fetchProducts();
    expect(productStateReducer(undefined, action)).toMatchObject({
      loading: true
    });
  });

  it('should return a new state with Loading:false and array of data', () => {
    const productCategory:ProductsCategory[]=[
      {
        "name": "Category 1",
        "products": [
          {
            "name": "Product 1",
            "description": "Some Description",
            "price": [
              {
                "amount": "5.00",
                "billingFrequency": "MONTHLY",
                "periodStart": 1
              }
            ]
          },
          {
            "name": "Product 2",
            "description": "Some other description",
            "price": [
              {
                "amount": "5.00",
                "billingFrequency": "ONCE",
                "periodStart": null
              }
            ]
          }
        ]
      }
    ];
    let action = fetchProductSuccess(productCategory);
    expect(productStateReducer(undefined, action)).toMatchObject({
      loading: false,
      data:productCategory,
      error:""
    });
  });

  it('should return a new state with Loading:false and error', () => {
    let error="Unable To Fetch The data";
    let action = fetchProductError(error);
    expect(productStateReducer(undefined, action)).toMatchObject({
      loading: false,
      data:[],
      error:error
    });
  });
});

describe("Basket State Reducer", () => {
  let state: Product[] = [];
  it('should return the initial state', () => {
    let action: ActionBasket = {
      type: "",
    };
    expect(BasketStateReducer(undefined, action)).toEqual(state);
  });

  it('should return the new state with product added to basket', () => {
    let product: Product = {
      "name": "Product 3",
      "description": "Some more product descriptions",
      "price": [
        {
          "amount": "10.00",
          "billingFrequency": "MONTHLY",
          "periodStart": 1
        },
        {
          "amount": "19.99",
          "billingFrequency": "MONTHLY",
          "periodStart": 12
        }
      ]
    }
    let action = addToBasket(product)
    let oldState = [...state];
    expect(BasketStateReducer(oldState, action)).toMatchObject([product]);
  });

  it('should return the new state with product removed to basket', () => {
    let product: Product = {
      "name": "Product 3",
      "description": "Some more product descriptions",
      "price": [
        {
          "amount": "10.00",
          "billingFrequency": "MONTHLY",
          "periodStart": 1
        },
        {
          "amount": "19.99",
          "billingFrequency": "MONTHLY",
          "periodStart": 12
        }
      ]
    }
    let action = removeFromBasket(product)
    let oldState = [product];
    expect(BasketStateReducer(oldState, action)).toMatchObject([]);
  });
});