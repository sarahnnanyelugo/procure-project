import React from "react";
import "./supplier-form.scss";
import FormIcon1 from "../../assets/images/form-icon1.svg";
import FormIcon2 from "../../assets/images/form-icon2.svg";
import FormIcon3 from "../../assets/images/form-icon3.svg";
import FormIcon4 from "../../assets/images/form-icon4.svg";
import Arrow from "../../assets/images/arrow-left.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Password } from "../Password/Password";
import { GoogleButton } from "../GoogleButton/GoogleButton";

export const SupplierForm = () => {
  return (
    <>
      <div className="flexy ">
        <div className="col-md-5 form-bg">
          <div className="col-md-6 offset-md-3">
            <div className="flexy flexyM">
              <img src={FormIcon1} height="42px" width="42px" />
              <h5 className="col-md-8">Access to a Diverse Customer Base</h5>
            </div>
            <p>
              Get exposure to a broad and diverse customer base, increasing the
              potential for your products to reach a wide audience.
            </p>
          </div>
          <div className="col-md-6 offset-md-3 mt5">
            <div className="flexy flexyM">
              <img src={FormIcon2} height="42px" width="42px" />
              <h5 className="col-md-8">Efficient and Scalable Operations</h5>
            </div>
            <p>
              From order placement to fulfillment, ProCURED enhances efficiency
              in your supply chain.
            </p>
          </div>
          <div className="col-md-6 offset-md-3 mt5">
            <div className="flexy flexyM">
              <img src={FormIcon3} height="42px" width="42px" />
              <h5 className="col-md-8">Flexible Payment Options</h5>
            </div>
            <p>
              Flexible payment options, making transactions smoother and
              accommodating the diverse needs of buyers.
            </p>
          </div>
          <div className="col-md-6 offset-md-3 mt5">
            <div className="flexy flexyM">
              <img src={FormIcon4} height="42px" width="42px" />
              <h5 className="col-md-6">Competitive Pricing</h5>
            </div>
            <p>
              Competitive pricing strategies gives the opportunity to offer bulk
              discounts
            </p>
          </div>
        </div>
        <div className="col-md-6 form-container">
          <Link to={"/"}>
            <img src={Arrow} width="24px" />
            Back
          </Link>
          <br />
          <br />
          <br />
          <small>Start Selling on ProCURED!!!</small>
          <h1>Sign Up now and Start Selling.</h1>
          <p>
            Already Signed up? <Link to={"/login-form"}> Log In here</Link>
          </p>{" "}
          <p>
            Are you a Supplier?{" "}
            <Link to={"/login-form"}> Sell on ProCURED</Link>
          </p>
          
          <Row>
            <Col>
              <div class="form">
                <input
                  type="email"
                  name="email"
                  autocomplete="new-password"
                  required
                />
                <label for="text" class="label-name">
                  <span class="content-name">First Name</span>
                </label>
              </div>{" "}
            </Col>{" "}
            <Col>
              <div class="form">
                <input
                  type="email"
                  name="email"
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
            <select>
              <option>Company</option>
              <option>Education Industry</option>
            </select>
          </div>{" "}
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
          <div class="form">
            <input
              type="email"
              name="email"
              autocomplete="new-password"
              required
            />
            <label for="text" class="label-name">
              <span class="content-name">Phone Number</span>
            </label>
          </div>{" "}
          <Password placeholder=" Password" />
         
          <Link to={"/onboarding1"}>
            <button className="app-btn mt3">Continue</button>
          </Link>
          <Row>
            <Col>
              <div className="or flexy flexyM">
                <div className="col-md-5 bodda"></div>
                <div className="col-md-2">
                  <center>
                    {" "}
                    <p>or using</p>
                  </center>
                </div>
                <div className="col-md-5 bodda"></div>
              </div>

              <GoogleButton />
            </Col>{" "}
          </Row>
        </div>
      </div>
      <div className="prefooter-div col-md-8 offset-md-2 col-10 offset-1">
        <center>
          <h2>Ready to get started?</h2>
          <p>Register now to browse millions of goods from vetted vendors.</p>
          <button className="app-btn">Get started</button>
        </center>
      </div>
    </>
  );
};
