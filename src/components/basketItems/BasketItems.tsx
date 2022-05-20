import React, { ReactElement } from 'react';
import { Product } from '../../types';
import Price from '../common/price/Price'
interface BasketItemsProps {
  products: Product[]
}

function BasketItem(props: BasketItemsProps): ReactElement {
  const { products } = props;

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <React.Fragment key={product.name}>
        <div className="row">
          <div className="col-6">
            {product.name}
          </div>
          <div className="col-3">{product.price.length === 1 ? (<Price prices={product.price} />) : null}</div>
          <div className="col-3">{product.price.length === 2 ? (<Price prices={product.price} />) : null}</div>
        </div>
        { index !== products.length - 1 ? (<hr /> ): null }
        </React.Fragment>
      )
  });
};

return (
  <>
    {renderProducts()}
  </>
)
}

export default BasketItem;
