import React from "react";

export const StoresProducts = ({ data }) => {
  return (
    <div className="col">
      <div className="stores-product-component">
        <img src={data.productImg} width="100%" />
        <h6>{data.productName}</h6>
      </div>
    </div>
  );
};
