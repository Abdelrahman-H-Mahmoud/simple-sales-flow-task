import React from "react";
import Component from "./BasketItems";
import { shallow, ShallowWrapper } from "enzyme";
import { Product } from "../../types";

import Price from "../common/price/Price";
describe("BasketItems Component", () => {
  let products: Product[] = [
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
    {
      name: "Product 3",
      description: "Some more product descriptions",
      price: [
        {
          amount: "10.00",
          billingFrequency: "MONTHLY",
          periodStart: 1,
        },
        {
          amount: "19.99",
          billingFrequency: "MONTHLY",
          periodStart: 12,
        },
      ],
    },
  ];
  let wrapper: ShallowWrapper;

  it("should <hr/> exist and less than products by 1", () => {
    wrapper = shallow(<Component products={products} />);
    expect(wrapper.find("hr").length).toEqual(products.length - 1);
  });

  it("should Product Name be in the first Column", () => {
    wrapper = shallow(<Component products={products} />);
    const col=wrapper
    .find("div.row")
    .first()
    .find("div.col-6")
    .first()

    expect(col.contains(products[0].name)).toBe(true);
  });

  it("Should Price Component Render in the last column if price arrayLength 2", () => {
    const filteredProducts = products.filter((p) => p.price.length > 1);
    wrapper = shallow(<Component products={filteredProducts} />);
    const isCotaine=wrapper
      .find("div.row")
      .first()
      .find("div.col-3")
      .last()
      .contains(<Price prices={filteredProducts[0].price} />);

      expect(isCotaine).toBe(true);
  });

  it("Should Price Component Render in the Second column if price arrayLength 1", () => {
    const filteredProducts = products.filter((p) => p.price.length === 1);
    wrapper = shallow(<Component products={filteredProducts} />);
    const isCotaine=wrapper
      .find("div.row")
      .first()
      .find("div.col-3")
      .first()
      .contains(<Price prices={filteredProducts[0].price} />);

      expect(isCotaine).toBe(true);
  });
});
