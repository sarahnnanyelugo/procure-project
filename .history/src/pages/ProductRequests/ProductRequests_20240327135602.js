import React from "react";
import "./product-requests.scss";
function ProductRequests() {
  return (
    <>
      <h2>Product Request</h2>
      <div className="product-request-div flexy">
        <div style={{ paddingRight: "10px" }} className="col-md-7">
          <div className="request-div "></div>
        </div>
        <div style={{ paddingLeft: "10px" }} className="col-md-5">
          <div className="request-div ">
            <h4>Frequently Requested Products by other Businesses</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRequests;
