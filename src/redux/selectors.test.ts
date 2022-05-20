import {
  getBasketItems,
  getDarkMode,
  getProductCategories,
  getProductCategoriesState
} from "./selectors";

import { GlobalState } from "./types";
describe("Redux Selectors",()=>{
  const state:GlobalState={
    uiState: {
      darkMode: false
    },
    productsCategoryState: {
      loading: false,
      data: [
        {
          name: 'Category 1',
          products: [
            {
              name: 'Product 1',
              description: 'Some Description',
              price: [
                {
                  amount: '5.00',
                  billingFrequency: 'MONTHLY',
                  periodStart: 1
                }
              ]
            },
            {
              name: 'Product 2',
              description: 'Some other description',
              price: [
                {
                  amount: '5.00',
                  billingFrequency: 'ONCE',
                  periodStart: null
                }
              ]
            }
          ]
        },
        {
          name: 'Category 2',
          products: [
            {
              name: 'Product 3',
              description: 'Some more product descriptions',
              price: [
                {
                  amount: '10.00',
                  billingFrequency: 'MONTHLY',
                  periodStart: 1
                },
                {
                  amount: '19.99',
                  billingFrequency: 'MONTHLY',
                  periodStart: 12
                }
              ]
            },
            {
              name: 'Product 4',
              description: '',
              price: [
                {
                  amount: '7.99',
                  billingFrequency: 'ONCE',
                  periodStart: null
                }
              ]
            },
            {
              name: 'Product 5',
              description: '',
              price: [
                {
                  amount: '0.00',
                  billingFrequency: 'ONCE',
                  periodStart: null
                }
              ]
            }
          ]
        }
      ],
      error: ''
    },
    BasketState: [
      {
        name: 'Product 3',
        description: 'Some more product descriptions',
        price: [
          {
            amount: '10.00',
            billingFrequency: 'MONTHLY',
            periodStart: 1
          },
          {
            amount: '19.99',
            billingFrequency: 'MONTHLY',
            periodStart: 12
          }
        ]
      }
    ]
  }
  it("Should return dark Mode",()=>{
    expect(getDarkMode(state)).toBe(state.uiState.darkMode);
  });

  it("Should return basket items",()=>{
    expect(getBasketItems(state)).toMatchObject(state.BasketState);
  });

  it("Should return product Category",()=>{
    expect(getProductCategories(state)).toMatchObject(state.productsCategoryState.data);
  });

  it("Should return product Category State",()=>{
    expect(getProductCategoriesState(state)).toMatchObject(state.productsCategoryState);
  });
})