import React from "react";
import { useState } from "react";
import { reviewedProducts } from "../../../TestData";
import { ReviewedOrder } from "../ReviewedOrder";
import Icon from "../../../assets/images/stalls-icon.png";

import "./leave-review.scss";
import { Col, Row } from "react-bootstrap";
export const LeaveReview = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [state, setState] = useState({
    query: "",

    list: reviewedProducts,
  });
  return (
    <>
      <div className="order-details-div leave-review">
        <p>
          <span>Order </span> / <span>Order Details</span> / Review
        </p>{" "}
        <h3 className="mt3">Leave a Review</h3>
        <div className="transaction-page">
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Product Review
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
            >
              Store Review
            </button>
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="d-md-flex">
                {" "}
                <div className="col-md-5">
                  {" "}
                  <div className="col-md-11">
                    {" "}
                    {state.list.map((data, index) => (
                      <ReviewedOrder data={data} />
                    ))}
                  </div>
                </div>
                <div className="col-md-7 mt4">
                  <form>
                    <textarea placeholder="Leave a comment for this product" />
                  </form>{" "}
                  <textarea
                    placeholder="Leave a comment for this product"
                    className="mt4"
                  />
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              <div className="d-md-flex">
                <div className="col-md-4">
                  <p>
                    <span>Seller</span>
                  </p>
                  <p>
                    <img src={Icon} />
                    Stalls Stationeries
                  </p>
                </div>
                <div className="col-md-5">
                  {" "}
                  <p>
                    <span>Products</span>
                  </p>
                </div>
                <div className="col-md-3" style={{ fontSize: "12px" }}>
                  <Row>
                    <Col>
                      {" "}
                      <p>
                        <span>ORDER PLACED:</span>
                      </p>
                    </Col>
                    <Col>
                      {" "}
                      <p>
                        <span>12 February 2024</span>
                      </p>
                    </Col>
                  </Row>{" "}
                  <Row>
                    <Col>
                      {" "}
                      <p>
                        <span>ORDER ID:</span>
                      </p>
                    </Col>
                    <Col>
                      {" "}
                      <p>
                        <span>#45567HG-FGYU-YTFG</span>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
