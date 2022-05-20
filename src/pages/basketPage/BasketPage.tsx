import React, { ReactElement } from 'react';
import { useSelector } from "react-redux";

import { getBasketItems } from "../../redux/selectors";
import BasketItems from "../../components/basketItems/BasketItems";
import './BasketPage.css';
import ButtonLink from "../../components/common/buttonLink/ButtonLink";

function BasketPage(): ReactElement {
  const basketItems = useSelector(getBasketItems);

  return (
    <div className="container">
      <div className="row">
        <div className='col align-left'>
          <h5 className="text-header">Overview</h5>
        </div>
      </div>
      <div className="row">
        <div className="col basket-items">
          {basketItems && (<BasketItems products={basketItems} />)}
        </div>
      </div>

      <div className="row">
        <div className='col align-right'>
          <ButtonLink href="/">Order</ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
