import React from "react";
export const Recommended = ({ data }) => {
  return (
    <div className="col">
      <div className="recommended-product2">
        <img src={data.productImg} width="100%" height="80%" />
        <p>{data.productName}</p>
        <h6>
          ${data.minPrice}-${data.maxPrice}
        </h6>
        <small>Min. order: ${data.minOrder}</small>
      </div>
    </div>
  );
};
