import React from "react";
import Component from "./ButtonLink";
import { shallow } from "enzyme";


describe("Button Link Component", () => {

  let props={
    href:"/order"
  }

  it("Children should Container Order", () => {
    const wrapper=shallow(<Component {...props}>Order</Component>);
    expect(wrapper.contains("Order")).toEqual(true);
  });

  it("props should Container /order", () => {
    const wrapper=shallow(<Component {...props}>Order</Component>);
    expect(wrapper.props().to).toEqual(props.href);
  });
});
