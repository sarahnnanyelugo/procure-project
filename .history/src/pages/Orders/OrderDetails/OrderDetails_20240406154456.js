import React from "react";
import { Col, Row } from "react-bootstrap";
import "./order-details.scss";
export const OrderDetails = () => {
  return (
    <>
      <div className="order-details-div">
        <div className="d-flex ">
          <p style={{ flexGrow: 1 }}>
            <span>Order </span>/ Order Details
          </p>
          <button>Download Invoice</button>
        </div>
        <div className="d-flex mt5">
          <div style={{ flexGrow: 1 }}>
            {" "}
            <h3>Order Details</h3>
            <div className="d-flex">
              {" "}
              <p>
                <span style={{ fontSize: "12px", marginRight: "10px" }}>
                  #45567HG-FGYU-YTFG
                </span>
              </p>
              <button className="status-btn" style={{ fontSize: "12px" }}>
                Completed
              </button>
            </div>
          </div>
          <div>
            <p>ORDER PLACED:</p>
            <p style={{ fontSize: "12px" }}>
              <span>12 February 2024</span>
            </p>
          </div>
        </div>
        <div className="d-md-flex shipping-details-table">
          <div className="col-md-4">
            <h6>Shipping Details</h6>
            <p>Shipping Details</p>
            <p>16 NTA Road, Mgbuoba, Port-Harcourt, Rives State. Nigeria.</p>
          </div>
          <div className="col-md-4">
            <h6>Payment Method</h6>
            <p>Bank Transfer</p>
            <p>Access Bank</p>
            <p>21******34</p>
          </div>
          <div className="col-md-4">
            <h6>Order Summary</h6>
            <Row>
              <Col>Item(s) Subtotal:</Col>
              <Col>₦500,000</Col>
            </Row>
            <Row>
              <Col>Shipping:</Col>
              <Col>₦8,000</Col>
            </Row>{" "}
            <Row>
              <Col>Total</Col>
              <Col>₦8,000</Col>
            </Row>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "300px" }} /> */}
    </>
  );
};
