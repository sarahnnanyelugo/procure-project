import React from "react";
import Icon1 from "../../assets/images/furniture.svg";
export const BusinessDetail = () => {
  return (
    <>
      <center className="mt6 buy-intro">
        <small>Step 2/6</small>
        <h4>Business Details</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
      <div className="col-md-6 offset-md-3 business-detail-div">
        <div className="business-detail-div-select flexy flexyM">
          <img src={Icon1} />
          <p>Physical store</p>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
