import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <p>Check out /</p>
        <Link to={"/checkout"}>Payment /</Link>
        <Link to={"/checkout"}>Confirmation /</Link>
      </div>
      <div className="col-md-10 offset-md-1 cart-list-div d-md-flex">
        <div className="col-md-8 pr no-pad mt4">
          <h6>Cart list</h6>
          <div className="cart-list-container"></div>
        </div>
        <div className="col-md-4 pl no-pad mt4">
          <h6>Order Summary</h6>
          <div className="cart-list-container summary-div">
            <Row>
              <Col>
                <p>Hastletop Stationaries</p>
              </Col>
              <Col>
                <p>₦135,000</p>
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <p>Stalls Stationaries</p>
              </Col>
              <Col>
                <p>₦5,000</p>
              </Col>
            </Row>{" "}
            <hr />
            <Row>
              <Col>
                <p>
                  <span>Welcome discount</span>
                </p>
              </Col>
              <Col>
                <p>
                  <span>-₦6,000</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Shipping</p>
              </Col>
              <Col>
                <p>-—</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>VAT</p>
              </Col>
              <Col>
                <p>₦2,000</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Total</h6>
              </Col>
              <Col>
                <h6>₦136,000</h6>
              </Col>
            </Row>
          </div>

          <button className="app-btn col-md-12 mt2">Save and continue</button>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
