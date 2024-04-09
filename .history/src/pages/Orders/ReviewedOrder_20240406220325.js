import React from "react";

export const ReviewedOrder = ({ data }) => {
  return (
    <>
      <div className="col">
        <div className="d-flex shipping-details-table col-md-12 reviewed-order">
          <div className="col-md-4">
            <img src={data.productImg} width="100%" />
          </div>
          <div className="col-md-8">
            <p>{data.productDetails}</p>
            <br />
            <p>
              Sold by: <span>{data.supplier}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
