import { testSaga } from 'redux-saga-test-plan';
import { fetchProducts } from "../services/productService";
import { fetchProductSaga, watchFetchProduct } from "./saga";
import { ACTION_LOAD_PRODUCTS } from "./types";
import { ProductsCategory } from "../types";
import { fetchProductSuccess } from "./actions";
describe("Saga Test Suit", () => {
  describe("GET Products", () => {
    const products:ProductsCategory[] = [
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
      },
      {
        "name": "Category 2",
        "products": [
          {
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
          },
          {
            "name": "Product 4",
            "description": "",
            "price": [
              {
                "amount": "7.99",
                "billingFrequency": "ONCE",
                "periodStart": null
              }
            ]
          },
          {
            "name": "Product 5",
            "description": "",
            "price": [
              {
                "amount": "0.00",
                "billingFrequency": "ONCE",
                "periodStart": null
              }
            ]
          }
        ]
      }
    ];

    it('watches ACTION_LOAD_PRODUCTS action', () => {
      testSaga(watchFetchProduct)
        .next()
        .takeLatest(ACTION_LOAD_PRODUCTS, fetchProductSaga)
        .next()
        .isDone();
    });

    it('handles Fetch Product Generator', () => {
      testSaga(fetchProductSaga)
        .next()
        .call(fetchProducts)
        .next(products)
        .put(fetchProductSuccess(products))
        .next()
        .isDone();
    });
  })
})