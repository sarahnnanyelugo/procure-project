import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";

export const Payment = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <Link to={"/checkout"}>Check out /</Link>
        <p>Payment /</p>
        <Link to={"/checkout"}>Confirmation /</Link>
      </div>
      <div className="col-md-10 offset-md-1 cart-list-div d-md-flex">
        <div className="col-md-8 pr no-pad mt4">
          <h5>Check Out</h5>
          <div class="form">
            <input
              type="email"
              name="email"
              autocomplete="new-password"
              required
            />
            <label for="text" class="label-name">
              <span class="content-name">Payment method</span>
            </label>
          </div>{" "}
          <div className="cart-list-container form-container2">
            <form>
              <div class="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="new-password"
                  required
                />
                <label for="text" class="label-name">
                  <span class="content-name">Card Number</span>
                </label>
              </div>{" "}
              <Row>
                <Col>
                  {" "}
                  <div class="form">
                    <input
                      type="username"
                      name="username"
                      autocomplete="new-password"
                      required
                    />
                    <label for="text" class="label-name">
                      <span class="content-name">Expiration</span>
                    </label>
                  </div>{" "}
                </Col>
                <Col>
                  {" "}
                  <div class="form">
                    <input
                      type="username"
                      name="username"
                      autocomplete="new-password"
                      required
                    />
                    <label for="text" class="label-name">
                      <span class="content-name">Last Name</span>
                    </label>
                  </div>{" "}
                </Col>
              </Row>
            </form>
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-4 pl no-pad mt4">
          <h5>Order Summary</h5>
          <OrderSummary />

          <Link to={"/payment"}>
            {" "}
            <button className="app-btn col-md-12 mt2">Save and continue</button>
          </Link>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
