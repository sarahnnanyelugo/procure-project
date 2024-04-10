import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/check.png";
import { CartItems } from "./CartItems";
import Icon2 from "../../assets/images/prd-icon.png";
import Icon3 from "../../assets/images/prd-icon2.png";
import Icon4 from "../../assets/images/prd-icon3.png";
import Icon22 from "../../assets/images/stalls-icon.png";

import Icon5 from "../../assets/images/payment.png";
import { PurchasedItems } from "./PurchasedItems";

export const Confirmation = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back to shopping
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <Link to={"/checkout"}>Check out /</Link>
        <Link to={"/payment"}>Payment /</Link>
        <p>Confirmation /</p>
      </div>

      <hr className="col-md-10 offset-md-1" />

      <div className="col-md-10 offset-md-1 cart-list-div d-md-flex">
        <div className="col-md-8 pr no-pad mt4">
          <div className="d-flex">
            {" "}
            <div>
              {" "}
              <img src={Icon} style={{ marginRight: "10px" }} />
            </div>
            <div className="">
              <h6 style={{ fontFamily: "SoraSB" }}>
                Thank you <br />
                Your order has been received
              </h6>
              <p
                style={{ fontSize: "12px", color: "grey", fontFamily: "SoraR" }}
              >
                You will receive an email with your order details and any other
                information
              </p>
            </div>
          </div>
          <div
            className="cart-list-container confirmation-div mt3"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <h6 style={{ fontFamily: "SoraSB" }}>Order details</h6>
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>
                <p>Order number</p>
              </div>
              <div>
                <p>9883843</p>
              </div>
            </div>{" "}
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>
                <p>Date</p>
              </div>
              <div>
                <p>May 9, 2024</p>
              </div>
            </div>{" "}
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>
                <p>Payment method</p>
              </div>
              <div>
                <p>Credit card</p>
              </div>
            </div>{" "}
            <hr />
            <div className="col-md-5 offset-md-7">
              <div className="d-flex">
                <div style={{ flexGrow: 1 }}>
                  <p>Subtotal</p>
                </div>
                <div>
                  <p>₦0.00</p>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="col-md-5 offset-md-7">
              <div className="d-flex">
                <div style={{ flexGrow: 1 }}>
                  <p>VAT</p>
                </div>
                <div>
                  <p>₦2,000</p>
                </div>
              </div>{" "}
            </div>
            <div className="col-md-5 offset-md-7">
              <div className="d-flex mt2">
                <div style={{ flexGrow: 1 }}>
                  <h6>Total</h6>
                </div>
                <div>
                  <h6>₦136,000</h6>
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            className="cart-list-container confirmation-div mt3 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <h6 style={{ fontFamily: "SoraSB" }}>Product details</h6>
            <div className="d-flex mt2">
              {" "}
              <div style={{ flexGrow: 1 }} className="d-flex">
                <img src={Icon22} style={{ marginRight: "10px" }} />
                <h5>Hastletop Stationaries</h5>
              </div>
              <h5>₦ 135,500</h5>
            </div>
            <hr />
            <PurchasedItems
              itemName="Supercute Waterproof Mochila…"
              itemInfo="Teddy Pink"
              Icon={Icon2}
              itemQty="30"
              amount="25, 000"
            />{" "}
            <hr />
            <PurchasedItems
              itemName="Supercute Waterproof Mochila…"
              itemInfo="Teddy Pink"
              Icon={Icon3}
              itemQty="20"
              amount="35, 000"
            />{" "}
            <hr />
            <PurchasedItems
              itemName="Back To School Government Ten…"
              itemInfo="Teddy Pink"
              Icon={Icon4}
              itemQty="80"
              amount="55, 000"
            />
            <hr />
            <div className="d-flex">
              {" "}
              <div style={{ flexGrow: 1 }} className="d-flex">
                <img src={Icon22} style={{ marginRight: "10px" }} />
                <h5>Stalls Stationaries</h5>
              </div>
              <h5>₦5,000</h5>
            </div>
          </div>
          <div
            className="cart-list-container confirmation-div mt3 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <h6 style={{ fontFamily: "SoraSB" }}>Customer details</h6>
            <br />
            <Row>
              {" "}
              <Col>
                <h6>Contact</h6>
              </Col>{" "}
              <Col>
                <h6>Billing address</h6>
              </Col>
            </Row>{" "}
            <Row>
              {" "}
              <Col>
                <p>Email: olasunkanmifinesse@gmail.com</p>
              </Col>{" "}
              <Col>
                <p>Peter Olugbenga</p>
              </Col>
            </Row>{" "}
            <Row>
              {" "}
              <Col>
                <p>Phone: 07055630810</p>
              </Col>{" "}
              <Col>
                <p>Nigeria</p>
                <p>16b Alhaji Hussein Sumonu street</p>
              </Col>
            </Row>{" "}
            <br />
            <Row>
              {" "}
              <Col>
                <h6>Card details</h6>
                <img src={Icon} style={{ marginRight: "10px" }} />
                <p>Mastercard— 0956</p>
              </Col>{" "}
              <Col>
                <p>98278829</p>
              </Col>
            </Row>
          </div>{" "}
        </div>
        <div className="col-md-4 pl no-pad mt4">
          <h5>Check Out</h5>
          <div className="cart-list-container"></div>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
