import React, { ReactElement } from "react";

import Category from "./category/Category";
import { Product, ProductsCategory as Categories } from "../../types";

export interface ProductCatergoryProps {
  categories: Categories[];
  basketItems: Product[];
}
function ProductsCategory(props: ProductCatergoryProps): ReactElement {
  const { basketItems, categories } = props;
  return (
    <>
      {categories.map((category) => (
        <Category
          basketItems={basketItems}
          name={category.name}
          products={category.products}
          key={category.name}
        />
      ))}
    </>
  );
}

export default ProductsCategory;
