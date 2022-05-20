import React, { ReactElement } from "react";
import { PriceObj, BillingFrequencyEnum } from "../../../types";
import "./Price.css";

interface PriceProps {
  prices: PriceObj[];
}

function Price(props: PriceProps): ReactElement {
  let { prices } = props;

  const getInstallment = () => {
    if (prices[1]) {
      return (
        <span>
          From {prices[1].periodStart}. month {prices[1].amount} &euro; /{" "}
          {BillingFrequencyEnum[prices[1].billingFrequency]}
        </span>
      );
    }
  };
  return (
    <div className="price">
      <div className="price-amount">
        {prices[0].amount} &euro; /{" "}
        {BillingFrequencyEnum[prices[0].billingFrequency]}
      </div>
      {getInstallment()}
    </div>
  );
}

export default Price;
