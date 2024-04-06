import React from "react";
import "./order-details.scss";
export const OrderDetails = () => {
  return (
    <>
      <div className="order-details-div">
        <div className="d-flex ">
          <p style={{ flexGrow: 1 }}>
            <span>Order </span>/ Order Details
          </p>
          <button>Download Invoice</button>
        </div>
        <div className="d-flex">
          <h3>Order Details</h3>
        </div>
      </div>
      {/* <div style={{ height: "300px" }} /> */}
    </>
  );
};
