import React from "react";
import "./product-requests.scss";
function ProductRequests() {
  return (
    <>
      <h2>Product Request</h2>
      <div className="product-request-div flexy">
        <div style={{ paddingRight: "20px" }} className="col-md-8">
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
