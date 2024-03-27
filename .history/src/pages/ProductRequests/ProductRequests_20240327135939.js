import React from "react";
import "./product-requests.scss";
function ProductRequests() {
  return (
    <>
      <div className="flexy flexyM">
        <h2 style={{ flexGrow: 1 }}>Product Request</h2>
        <button className="app-btn">Request products</button>
      </div>
      <div className="product-request-div flexy mt2">
        <div style={{ paddingRight: "30px" }} className="col-md-8">
          <div className="request-div "></div>
        </div>
        <div className="col-md-4">
          <div className="request-div ">
            <h4>Frequently Requested Products by other Businesses</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRequests;
