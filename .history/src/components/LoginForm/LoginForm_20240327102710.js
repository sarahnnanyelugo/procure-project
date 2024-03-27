import React from "react";
import "./login-form.scss";
import FormBg from "../../assets/images/form-bg.png";

import Arrow from "../../assets/images/arrow-left.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Password } from "../Password/Password";
import { GoogleButton } from "../GoogleButton/GoogleButton";

export const LoginForm = () => {
  return (
    <>
      <div className="flexy ">
        <div className="col-md-5 form-bg">
          {/* <img src={FormBg} width="100%" /> */}
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
          <h1> Welcome Back</h1>
          <p>Thousands of products awaits you .</p>
          <p>
            Don’t have an account yet?{" "}
            <Link to={"/supplier-form"}> Sign Up</Link>
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
                  <span class="content-name">Email</span>
                </label>
              </div>{" "}
            </Col>{" "}
          </Row>
          {/* <Row>
            <Col>
              <Password placeholder="Password" />
            </Col>{" "}
          </Row> */}
          <Row>
            <Link className="mt2 offset-md-9">Forgot Password</Link>
            <Col>
              <button className="app-btn mt2">Continue</button>
            </Col>{" "}
          </Row>{" "}
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
