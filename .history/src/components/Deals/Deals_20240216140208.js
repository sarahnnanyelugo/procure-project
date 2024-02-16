import React from "react";
import "./deals.scss";
export const Deals = ({ data }) => {
  return (
    <>
      <div className="col">
        <div className="deals-div">
          <img src={data.productImg} width="100%" />
          <h6>{data.productName}</h6>

          <small>
            Starting at <span>{data.startingPrice}</span>
            <span className="discount"> {data.discountAmount}</span>
          </small>
          <div className="flexy flexyM">
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <small className="rating">{data.rating}</small>
          </div>
          <p>{data.suppliers} Suppliers</p>
        </div>
      </div>
    </>
  );
};
