import React from "react";

export const ReviewedOrder = ({ data }) => {
  const [boda] = data;
  return (
    <>
      <div className="col">
        <div
          className="d-flex shipping-details-table2 col-md-12 reviewed-order"
          style={{ border: boda }}
        >
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
