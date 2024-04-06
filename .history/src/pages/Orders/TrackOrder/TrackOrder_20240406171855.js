import React from "react";
import Icon from "../../../assets/images/tick.png";
import Icon2 from "../../../assets/images/truck.png";
import Icon3 from "../../../assets/images/shipped.png";
import Icon4 from "../../../assets/images/order-complete.png";

export const TrackOrder = () => {
  return (
    <>
      <div className="order-details-div">
        <p>
          <span>Order </span> / <span>Order Details</span> / Track Order
        </p>

        <h3>Track Order</h3>
        <div className="d-md-flex shipping-details-table">
          <div className="col-md-3">
            <center>
              <img src={Icon} height="16px" width="16px" />
              <h6>ORDER PLACED</h6>
              <p>
                <span>12 February 2024</span>
              </p>{" "}
              <p>
                <span>12:38 PM</span>
              </p>
            </center>
          </div>
          <div className="col-md-3">
            {" "}
            <center>
              <img src={Icon2} height="16px" width="16px" />
              <h6>ORDER PLACED</h6>
              <p>
                <span>12 February 2024</span>
              </p>{" "}
              <p>
                <span>12:38 PM</span>
              </p>
            </center>
          </div>
          <div className="col-md-3">
            {" "}
            <center>
              <img src={Icon3} height="16px" width="16px" />
              <h6>ORDER PLACED</h6>
              <p>
                <span>12 February 2024</span>
              </p>{" "}
              <p>
                <span>12:38 PM</span>
              </p>
            </center>
          </div>
          <div className="col-md-3">
            {" "}
            <center>
              <img src={Icon4} height="16px" width="16px" />
              <h6>ORDER PLACED</h6>
              <p>
                <span>12 February 2024</span>
              </p>{" "}
              <p>
                <span>12:38 PM</span>
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
