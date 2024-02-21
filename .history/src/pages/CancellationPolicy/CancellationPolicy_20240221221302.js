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
      <center>
        <div className="col-md-6 policy-heading">
          <h1>Returns and Cancellation Policy</h1>
          <p className="col-md-11">
            We hope you loved what you ordered! But just incase you’re not 100%
            satisfied, we’ve made the process super easy.
          </p>
        </div>
      </center>
      <div className="col-md-6 offset-md-1">
        <small>Last updated: Mon, Feb 2nd 2024, 12:13PM</small>
        <h5></h5>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default CancellationPolicy;
