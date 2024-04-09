import React from "react";
import { useState } from "react";
import { reviewedProducts } from "../../../TestData";
import { ReviewedOrder } from "../ReviewedOrder";
import Icon from "../../../assets/images/stalls-icon.png";

import "./leave-review.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <div className="d-md-flex shipping-details-table">
                {" "}
                <div className="col-md-5">
                  {" "}
                  <div className="col-md-11">
                    {" "}
                    <ReviewedOrder data={state.list[0]} />
                  </div>
                </div>
                <div className="col-md-7">
                  <form>
                    <textarea placeholder="Leave a comment for this product" />
                  </form>{" "}
                </div>
              </div>{" "}
              <div className="d-md-flex shipping-details-table">
                {" "}
                <div className="col-md-5">
                  {" "}
                  <div className="col-md-11">
                    {" "}
                    <ReviewedOrder data={state.list[1]} />
                  </div>
                </div>
                <div className="col-md-7 ">
                  <form>
                    <textarea placeholder="Leave a comment for this product" />
                  </form>{" "}
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              <div style={{ border: "solid 1px #e8e5e5", padding: "20px" }}>
                {" "}
                <div className="d-md-flex">
                  <div className="col-md-3">
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
                      <span>Product</span>
                    </p>
                    <ReviewedOrder data={state.list[0]} />
                  </div>
                  <div
                    className="col-md-3 mt4 offset-md-1"
                    style={{ fontSize: "12px" }}
                  >
                    <Row>
                      <Col md={5}>
                        {" "}
                        <p>
                          <span>ORDER PLACED:</span>
                        </p>
                      </Col>
                      <Col md={7}>
                        {" "}
                        <p>
                          <span>12 February 2024</span>
                        </p>
                      </Col>
                    </Row>{" "}
                    <Row>
                      <Col md={4}>
                        {" "}
                        <p>
                          <span>ORDER ID:</span>
                        </p>
                      </Col>
                      <Col md={8}>
                        {" "}
                        <p>
                          <span>#45567HG-FGYU-YTFG</span>
                        </p>
                      </Col>
                    </Row>
                    <Link
                      to={""}
                      style={{
                        color: "#2F77D9",
                        fontFamily: "SoraR",
                        textDecoration: "none",
                      }}
                    >
                      View order details
                    </Link>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="col-md-9">
                    <p style={{ color: "#707070", fontFamily: "SoraR" }}>
                      Rate Seller
                    </p>
                    <textarea placeholder="Leave a comment on your experience with this seller" />
                  </div>
                  <div className="offset-md-1">
                    {" "}
                    <button
                      className="app-btn mt6 "
                      style={{ background: "#FF3C2B" }}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div
                className="mt4"
                style={{ border: "solid 1px #e8e5e5", padding: "20px" }}
              >
                {" "}
                <div className="d-md-flex">
                  <div className="col-md-3">
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
                      <span>Product</span>
                    </p>
                    <ReviewedOrder data={state.list[0]} />
                  </div>
                  <div
                    className="col-md-3 mt4 offset-md-1"
                    style={{ fontSize: "12px" }}
                  >
                    <Row>
                      <Col md={5}>
                        {" "}
                        <p>
                          <span>ORDER PLACED:</span>
                        </p>
                      </Col>
                      <Col md={7}>
                        {" "}
                        <p>
                          <span>12 February 2024</span>
                        </p>
                      </Col>
                    </Row>{" "}
                    <Row>
                      <Col md={4}>
                        {" "}
                        <p>
                          <span>ORDER ID:</span>
                        </p>
                      </Col>
                      <Col md={8}>
                        {" "}
                        <p>
                          <span>#45567HG-FGYU-YTFG</span>
                        </p>
                      </Col>
                    </Row>
                    <Link
                      to={""}
                      style={{
                        color: "#2F77D9",
                        fontFamily: "SoraR",
                        textDecoration: "none",
                      }}
                    >
                      View order details
                    </Link>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="col-md-9">
                    <p style={{ color: "#707070", fontFamily: "SoraR" }}>
                      Rate Seller
                    </p>
                    <textarea placeholder="Leave a comment on your experience with this seller" />
                  </div>
                  <div className="offset-md-1">
                    {" "}
                    <button
                      className="app-btn mt6 "
                      style={{ background: "#FF3C2B" }}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
