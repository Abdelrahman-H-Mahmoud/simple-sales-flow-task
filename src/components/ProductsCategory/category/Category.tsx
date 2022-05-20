import React, { ReactElement, ChangeEvent } from "react";
import { Product as ProductType } from "../../../types";
import { addToBasket, removeFromBasket } from "../../../redux/actions";
import Product from "../product/Product";
import { useDispatch } from "react-redux";

export interface CategoryProps {
  name: string;
  products: ProductType[];
  basketItems: ProductType[];
}

function Category(props: CategoryProps): ReactElement {
  const dispatch = useDispatch();

  const handleProductCheckChange = (
    e: ChangeEvent<HTMLInputElement>,
    product: ProductType
  ) => {
    if (e.target.checked) {
      dispatch(addToBasket(product));
    } else {
      dispatch(removeFromBasket(product));
    }
  };

  const isProductInBasket = (product: ProductType): boolean => {
    return props.basketItems.findIndex((x) => x.name === product.name) !== -1
      ? true
      : false;
  };
  return (
    <div>
      <div className="row">
        <div className="col align-left">
          <h5 className="text-header">{props.name.toLocaleUpperCase()}</h5>
        </div>
      </div>
      <div className="row">
        {props.products.map((product) => (
          <div className="col-4" key={product.name}>
            <Product
              checked={isProductInBasket(product)}
              product={product}
              onCheckChanged={handleProductCheckChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
