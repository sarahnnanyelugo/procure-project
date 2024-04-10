import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/check.png";

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
          <div className="cart-list-container">
            <h6 style={{ fontFamily: "SoraSB" }}>Order details</h6>
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>Order number</div>
              <div>9883843</div>
            </div>{" "}
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>Date</div>
              <div>May 9, 2024</div>
            </div>{" "}
            <div className="d-flex">
              <div style={{ flexGrow: 1 }}>Payment method</div>
              <div>Credit card</div>
            </div>{" "}
          </div>
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
