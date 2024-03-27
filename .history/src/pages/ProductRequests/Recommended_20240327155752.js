import React from "react";
export const Recommended = ({ data }) => {
  return (
    <div className="col">
      <div className="recommended-product2">
        <img src={data.productImg} width="100%" />
        <small>{data.productName}</small>
        <h6>{data.priceRange}</h6>
        <small>Min. order: {data.minOrder}</small>
      </div>
    </div>
  );
};
