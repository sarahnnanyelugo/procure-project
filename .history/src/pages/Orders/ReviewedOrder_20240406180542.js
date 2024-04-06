import React from "react";

export const ReviewedOrder = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <div className="col-md-4">
          <img src={data.productImg} />
        </div>
        <div className="col-md-8">
          <p>{data.productDetails}</p>
          <p>
            Sold by: <span>{data.supplier}</span>
          </p>
        </div>
      </div>
    </>
  );
};
