import React from "react";
import Component, { CategoryProps } from "./Category";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../../redux/store";
describe("CategoryComponent", () => {
  let props: CategoryProps = {
    basketItems: [],
    name: "Category 1",
    products: [
      {
        name: "Product 1",
        description: "Some Description",
        price: [
          {
            amount: "5.00",
            billingFrequency: "MONTHLY",
            periodStart: 1,
          },
        ],
      },
      {
        name: "Product 2",
        description: "Some other description",
        price: [
          {
            amount: "5.00",
            billingFrequency: "ONCE",
            periodStart: null,
          },
        ],
      },
    ],
  };

  let wrapper:ReactWrapper;
  beforeEach(()=>{
    wrapper = mount(
      <Provider store={createGlobalStore()}>
        <Component {...props} />
      </Provider>
    );
  });

  it("should contain Category Name", () => {
    expect(
      wrapper.find("h5.text-header").contains(props.name.toLocaleUpperCase())
    ).toBe(true);
  });

  it("should render 2 Products", () => {
    expect(
      wrapper.find("Product").length
    ).toBe(props.products.length);
  });
});
