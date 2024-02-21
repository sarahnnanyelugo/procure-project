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
        <div className="col-md-6 policy-heading mobile-padding">
          <h1>Returns and Cancellation Policy</h1>
          <p className="col-md-11">
            We hope you loved what you ordered! But just incase you’re not 100%
            satisfied, we’ve made the process super easy.
          </p>
        </div>
      </center>
      <div className="col-md-6 offset-md-1 policies mobile-padding">
        <small>Last updated: Mon, Feb 2nd 2024, 12:13PM</small>
        <h5>Refund Policy</h5>
        <p>
          a. <strong>Product Defects or Damage</strong>: ProCURED guarantees a
          full refund for products that arrive damaged or defective. Customers
          must notify us within 2 days of receiving the item, providing clear
          images of the damage for verification.
        </p>
        <p>
          {" "}
          b. <strong>Non-Delivery: </strong>If a product does not arrive within
          the specified delivery timeframe, customers are eligible for a full
          refund. Notification must be made within 7 days after the expected
          delivery date.
        </p>
        <p>
          c. Return of Unwanted Items: ProCURED accepts returns for unwanted
          items within 3 days of purchase. The product must be unused, in its
          original packaging, and the customer is responsible for return
          shipping costs.
        </p>
        <h5>Cancellation Policy</h5>
        <p>
          a. Order Cancellation: Customers can cancel their orders within 24
          hours of placing the order without incurring any cancellation fees.
          After this timeframe, cancellations may be subject to a 10% restocking
          fee.
        </p>
        <p>
          b. Subscription Cancellation: For subscription-based services,
          customers can cancel anytime before the next billing cycle to avoid
          being charged for the upcoming period.
        </p>
        <h5>Refund Process</h5>
        <p>
          a. Refund Processing Time: Refunds will be processed within 7 business
          days from the date of approval.
        </p>
        <p>
          {" "}
          b. Refund Method: Refunds will be issued through the same payment
          method used for the original purchase.
        </p>
        <h5>Contact information</h5>
        <p>
          a. Refund Processing Time: Refunds will be processed within 7 business
          days from the date of approval.
        </p>
        <p>
          {" "}
          b. Refund Method: Refunds will be issued through the same payment
          method used for the original purchase.
        </p>
        <div className="policy-info">
          <p>
            {" "}
            <span> Note: </span>ProCURED reserves the right to amend this policy
            at any time, and any changes will be effective immediately upon
            posting on our website.
          </p>
        </div>
        <p>
          By making a purchase on ProCURED, customers acknowledge and agree to
          abide by this Refund and Cancellation Policy.
        </p>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default CancellationPolicy;
