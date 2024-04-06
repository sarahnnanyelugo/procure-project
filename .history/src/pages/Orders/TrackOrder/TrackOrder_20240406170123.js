import React from "react";

export const TrackOrder = () => {
  return (
    <>
      <div className="order-details-div">
        <p>
          <span>Order </span> / <span>Order Details</span> / Track Order
        </p>

        <h3>Track Order</h3>
        <div className="d-md-flex shipping-details-table">
          <div className="col-md-3">
            <center>
              <h6>ORDER PLACED</h6>
              <p>
                <span></span>
              </p>{" "}
              <p>
                <span></span>
              </p>
            </center>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
