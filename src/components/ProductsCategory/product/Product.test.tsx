import React from "react";
import Component,{ProductProps} from "./Product";
import { mount } from "enzyme";
import Price from "../../common/price/Price";

describe("Product Component", () => {

  let props:ProductProps={
    product:{
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
    checked:true,
    onCheckChanged:jest.fn()
  }

  it("should contain Product Name", () => {
    const wrapper=mount(<Component {...props} />);
    expect(wrapper.find("div.card-title label").contains(props.product.name)).toBe(true);
  });

  it("should contain Description", () => {
    const wrapper=mount(<Component {...props} />);
    expect(wrapper.find("div.card-text").contains(props.product.description)).toBe(true);
  });

  it("should contain Price Component", () => {
    const wrapper=mount(<Component {...props} />);
    expect(wrapper.contains(<Price prices={props.product.price} />))
  });
  
  it("should contain Checkbox", () => {
    const wrapper=mount(<Component {...props} />);
    let inputType=wrapper.find("input").first().props().type;
    expect(inputType).toBe('checkbox');
  });

  it("should checkbox be checked", () => {
    const wrapper=mount(<Component {...props} />);
    let isChecked=wrapper.find("input").first().props().checked;
    expect(isChecked).toBe(true);
  });

  it("should checkbox not be checked", () => {
    let newProps={...props,checked:false};
    const wrapper=mount(<Component {...newProps} />);
    let isChecked=wrapper.find("input").first().props().checked;
    expect(isChecked).toBe(false);
  });

});
