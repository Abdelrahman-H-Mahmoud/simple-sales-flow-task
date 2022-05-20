import React, { ChangeEvent, ReactElement } from "react";
import { Product as ProductType } from "../../../types";
import Price from "../../common/price/Price";
import './Product.css'

export interface ProductProps {
  product: ProductType,
  onCheckChanged: (e: ChangeEvent<HTMLInputElement>, product: ProductType) => void,
  checked?: boolean
}

function Product(props: ProductProps): ReactElement {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <input className="form-check-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) => { props.onCheckChanged(e, props.product) }}
            type="checkbox"
            value=""
            id={props.product.name.replace(/\s/g, "")}
            checked={props.checked || false}
          />
          <label className="form-check-label" htmlFor={props.product.name.replace(/\s/g, "")}>
            {props.product.name}
          </label>
        </div>
        <div className="card-text">
          <p>
            {props.product.description}
          </p>
          <Price prices={props.product.price} />
        </div>
      </div>
    </div>
  )
}

export default Product;