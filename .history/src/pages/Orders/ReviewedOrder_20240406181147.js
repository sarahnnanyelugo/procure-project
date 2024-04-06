import React from "react";

export const ReviewedOrder = ({ data }) => {
  return (
    <>
      <div className="col">
        <div className="d-flex shipping-details-table">
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
      </div>
    </>
  );
};
