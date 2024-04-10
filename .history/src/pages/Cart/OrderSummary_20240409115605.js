import React from "react";
import Icon5 from "../../assets/images/payment.png";

export const OrderSummary = () => {
  return (
    <div className="cart-list-container summary-div">
      <Row>
        <Col>
          <p>Products</p>
        </Col>
        <Col>
          <p>₦140,000</p>
        </Col>
      </Row>{" "}
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
          <h6>Subtotal</h6>
        </Col>
        <Col>
          <h6>₦136,000</h6>
        </Col>
      </Row>
      <hr />
      <p>Do you have promo code</p>
      <div className="promo-div">
        <input type="text" placeholder="code" />
        <button>Enter</button>
      </div>
      <br />
      <p style={{ color: "#141212" }}>Accepted payment method</p>
      <img src={Icon5} />
      <p style={{ color: "#141212" }}>
        Any questions?{" "}
        <Link to={"/contact-us"} style={{ color: "#141212" }}>
          Contact us
        </Link>
      </p>
    </div>
  );
};
