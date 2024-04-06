import React from "react";

export const TrackOrder = () => {
  return (
    <>
      <div className="order-details-div">
        <div className="d-flex ">
          <p style={{ flexGrow: 1 }}>
            <span>Order </span> / <span>Order Details</span> / Track Order
          </p>
          <button>Download Invoice</button>
        </div>
      </div>
    </>
  );
};
