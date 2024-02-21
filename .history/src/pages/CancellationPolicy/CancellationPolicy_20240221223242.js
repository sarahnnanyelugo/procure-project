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
        <h5>Refund Policy</h5>
        <p>
          a. Product Defects or Damage: ProCURED guarantees a full refund for
          products that arrive damaged or defective. Customers must notify us
          within 2 days of receiving the item, providing clear images of the
          damage for verification.
        </p>
        <p>
          {" "}
          b. Non-Delivery: If a product does not arrive within the specified
          delivery timeframe, customers are eligible for a full refund.
          Notification must be made within 7 days after the expected delivery
          date.
        </p>
        <p>
          c. Return of Unwanted Items: ProCURED accepts returns for unwanted
          items within 3 days of purchase. The product must be unused, in its
          original packaging, and the customer is responsible for return
          shipping costs.
        </p>
        <h5>Cancellation Policy</h5>
        <p></p>
        <p></p>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default CancellationPolicy;
