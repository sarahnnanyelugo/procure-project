import React from "react";
import "./recommended-product.scss";
export const RecommendedProduct = ({ data }) => {
  return (
    <div className="col">
      <div className="recommended-product">
        <img src={data.productImg} />
      </div>
    </div>
  );
};
