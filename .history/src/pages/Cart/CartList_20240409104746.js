import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.scss";
import Accordion from "react-bootstrap/Accordion";
import Icon from "../../assets/images/stalls-icon.png";
import { CartItems } from "./CartItems";
import Icon1 from "../../assets/images/stalls-icon.png";
import Icon2 from "../../assets/images/prd-icon.png";
import Icon3 from "../../assets/images/prd-icon2.png";
import Icon4 from "../../assets/images/prd-icon3.png";
import Icon5 from "../../assets/images/payment.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CartList = () => {
  return (
    <>
      <Navbar colo="#000" />
      <div className="col-md-10 offset-md-1 mt4 cart-list-div">
        <div className="d-flex">
          <h3 style={{ flexGrow: 1 }}>Shopping Cart</h3>
          <input type="search" placeholder="search cart" className="col-md-3" />
        </div>
        <hr />
        <div className="d-md-flex ">
          <div className="col-md-8 pr no-pad mt4">
            <h6>Cart list</h6>
            <div className="cart-list-container">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex">
                    <div style={{ flexGrow: 1 }} className="d-flex">
                      <img src={Icon} />
                      <h5>Hastletop Stationaries</h5>
                    </div>
                    <h5>₦ 135,500</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <CartItems
                      itemName="Supercute Waterproof Mochila…"
                      itemInfo="Teddy Pink"
                      Icon={Icon2}
                    />
                    <hr />
                    <CartItems
                      itemName="Back To School Government Ten…"
                      itemInfo="Teddy Pink"
                      Icon={Icon3}
                    />
                    <hr />{" "}
                    <CartItems
                      itemName="Back To School Government Ten…"
                      itemInfo="Teddy Pink"
                      Icon={Icon4}
                    />
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>{" "}
            <div className="cart-list-container mt3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex">
                    <div style={{ flexGrow: 1 }} className="d-flex">
                      <img src={Icon} />
                      <h5>Stalls Stationaries</h5>
                    </div>
                    <h5>₦5,000</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <CartItems
                      itemName="Backpack accessories"
                      itemInfo="………"
                      Icon={Icon2}
                    />
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-4 pl no-pad mt4">
            <h6>Order Summary</h6>
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
          </div>
        </div>
      </div>
      <div className="selected-suppliers d-flex">
        <div className="col-md-3 offset-md-2">
          <p>2 Suppliers selected</p>
          <Link>Save for later</Link>
          {""}
          <Link>Cancel order</Link>
        </div>
        <div className="offset-md-3">
          <p>Order total</p>
          <h6>₦140,000</h6>
        </div>
        <button className="app-btn">Checkout from 2 supplies</button>
      </div>
      <div style={{ height: "200px" }} />
    </>
  );
};
