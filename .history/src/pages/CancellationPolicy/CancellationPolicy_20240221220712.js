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
        <div className="col-md-5 policy-heading">
          <h1>Returns and Cancellation Policy</h1>
          <p>
            We hope you loved what you ordered! But just incase you’re not 100%
            satisfied, we’ve made the process super easy.
          </p>
        </div>
      </center>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default CancellationPolicy;
