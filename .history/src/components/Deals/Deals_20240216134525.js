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
          {data.discountAmount}
        </small>
        <div className="flexy flexyM">
          <img src={data.star} height="11px" />
          <img src={data.star} height="11px" />
          <img src={data.star} height="11px" />
          <img src={data.star} height="11px" />
          <img src={data.star} height="11px" />
          <small className="rating">{data.rating}</small>
        </div>
      </div>
    </>
  );
};
