import React from "react";
import "./recommended-product.scss";
export const RecommendedProduct = ({ data }) => {
  return (
    <div className="col">
      <div className="recommended-product">
        <img src={data.productImg} width="100%" />
        <p>{data.productName}</p>
        <h6>{data.priceRange}</h6>
        <small>Min. order: {data.minOrder}</small>
      </div>
    </div>
  );
};
