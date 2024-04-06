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
        <div className="d-flex mt5">
          <div>
            {" "}
            <h3>Order Details</h3>
            <div className="d-flex">
              {" "}
              <p>
                <span style={{ fontSize: "12px", marginRight: "10px" }}>
                  #45567HG-FGYU-YTFG
                </span>
              </p>
              <button className="status-btn" style={{ fontSize: "12px" }}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "300px" }} /> */}
    </>
  );
};
