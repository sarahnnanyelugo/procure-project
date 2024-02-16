import React from "react";
import "./deals.scss";
export const Deals = () => {
  return (
    <>
      <div className="deals-div">
        <img src={Data.productImg} width="100%" />
        <h6>{data.productName}</h6>

        <small>
          Starting at <span>{data.startingPrice}</span>
          {data.discountPercent}
        </small>
        <div className="flexy flexyM">
          <img src={data.star} />
          <img src={data.star} />
          <img src={data.star} />
          <img src={data.star} />
          <img src={data.star} />
          <h6 className="rating">{data.rating}</h6>
        </div>
      </div>
    </>
  );
};
