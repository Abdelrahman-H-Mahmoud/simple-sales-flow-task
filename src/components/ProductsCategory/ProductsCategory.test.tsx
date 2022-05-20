import React from "react";
import Component, { ProductCatergoryProps } from "./ProductsCategory";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
describe("ProductCategory Component", () => {
  let props: ProductCatergoryProps = {
    basketItems: [],
    categories:[
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
    ]
  };

  let wrapper:ReactWrapper;
  beforeEach(()=>{
    wrapper = mount(
      <Provider store={createGlobalStore()}>
        <Component {...props} />
      </Provider>
    );
  });

  it("should render 2 Categories", () => {
    expect(
      wrapper.find("Category").length
    ).toBe(props.categories.length);
  });
});
