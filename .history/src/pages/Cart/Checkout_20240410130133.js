import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountrySelector from "../../components/CountrySelector/CountrySelector";
import { OrderSummary } from "./OrderSummary";

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
        <Link to={"/confirmation"}>Confirmation /</Link>
      </div>
      <div className="col-md-10 offset-md-1 cart-list-div d-md-flex">
        <div className="col-md-8 pr no-pad mt4">
          <h5>Check Out</h5>
          <div className="cart-list-container form-container2">
            <form>
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
                      <span class="content-name">First Name</span>
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
              <div class="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="new-password"
                  required
                />
                <label for="text" class="label-name">
                  <span class="content-name">Email</span>
                </label>
              </div>{" "}
              <CountrySelector />
              <div class="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="new-password"
                  required
                />
                <label for="text" class="label-name">
                  <span class="content-name">Address</span>
                </label>
              </div>{" "}
              <div class="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="new-password"
                  required
                />
                <label for="text" class="label-name">
                  <span class="content-name">Postal Code</span>
                </label>
              </div>{" "}
              <div class="form">
                <input type="tel" name="tel" autocomplete="" required />
                <label for="text" class="label-name">
                  <span class="content-name">Number</span>
                </label>
              </div>{" "}
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
