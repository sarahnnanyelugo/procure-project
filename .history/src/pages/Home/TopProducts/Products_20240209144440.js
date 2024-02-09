import React from "react";

export const Products = ({ data }) => {
  return (
    <div className="col">
      <div className="products-div">
        <img src={data.Img} width="100%" />
        <h5>{data.name}</h5>
        <div className="flexy flexyM">
          <small>Starting at</small>
          <h5>{data.amount}</h5>
        </div>{" "}
        <div className="flexy flexyM">
          <img src={data.star} />
          <h6>{data.rating}</h6>
        </div>
        <h6>{data.suppliers} Suppliers</h6>
      </div>
    </div>
  );
};
