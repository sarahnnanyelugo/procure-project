import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cancellation-policy.scss";
function CancellationPolicy() {
  return (
    <>
      {" "}
      <div className="policy-nav">
        <Navbar colo="#000" />
      </div>
      <div className="col-md-5">
        <h1>Returns and Cancellation Policy</h1>
        <p></p>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default CancellationPolicy;
