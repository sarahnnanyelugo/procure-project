import React from "react";
import Icon from "../../../assets/images/tick.png";
import Icon2 from "../../../assets/images/truck.png";
import Icon3 from "../../../assets/images/shipped.png";
import Icon4 from "../../../assets/images/order-complete.png";
import Icon5 from "../../../assets/images/tracking-steps.png";
import "./track-order.scss";
import { ReviewedOrder } from "../ReviewedOrder";
import { reviewedProducts } from "../../../TestData";
import { useState } from "react";
export const TrackOrder = () => {
  const [state, setState] = useState({
    query: "",

    list: reviewedProducts,
  });
  return (
    <>
      <div className="order-details-div">
        <p>
          <span>Order </span> / <span>Order Details</span> / Track Order
        </p>

        <h3>Track Order</h3>
        <div className="shipping-details-table track-shipping">
          <div className="col-md-10 offset-md-1">
            <img src={Icon5} width="100%" />
          </div>
          <div className="d-md-flex ">
            {" "}
            <div className="col-md-3">
              <center>
                {/* <img src={Icon} height="22px" width="22px" /> */}
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
                {/* <img src={Icon2} height="22px" width="22px" /> */}
                <h6>WAITING FOR DELIVERY</h6>
                <p>
                  <span>12 February 2024</span>
                </p>{" "}
                <p>
                  <span>12:38 PM</span>
                </p>
              </center>
            </div>
            <div className="col-md-3">
              <center>
                {/* <img src={Icon3} height="16px" width="16px" /> */}
                <h6>ORDER SHIPPED</h6>
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
                {/* <img src={Icon4} height="22px" width="22px" /> */}
                <h6>ORDER COMPLETE</h6>
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
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3  mt3">
          {state.list.map((data, index) => (
            <ReviewedOrder data={data} />
          ))}
        </div>
      </div>
    </>
  );
};
