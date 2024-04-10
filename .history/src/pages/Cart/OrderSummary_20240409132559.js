import React from "react";
import Icon5 from "../../assets/images/payment.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const OrderSummary = () => {
  return (
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
  );
};
