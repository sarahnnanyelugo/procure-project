import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./success-stories.scss";
import Banner from "../../assets/images/stories-banner.png";
import { Col, Row } from "react-bootstrap";

export const SuccessStories = () => {
  return (
    <>
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="stories-div col-md-10 offset-md-1">
        <div className="flexy flexyM">
          <p>Success stories</p> /<p>Success stories</p>
        </div>
        <img src={Banner} width="100%" />
        <div className="flexy">
          <div className="col-md-5 description">
            <h5>About TechGadgets Ltd</h5>
            <Row>
              <Col sm={6} md={3}>
                <small>Name:</small>
              </Col>
              <Col sm={6}>
                <h6>TechGadgets Ltd</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <small>Category:</small>
              </Col>
              <Col>
                <h6>Sports & Entertainment</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <small>Location:</small>
              </Col>
              <Col>
                <h6>Oluyole, Ibadan, Nigeria</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <small>Founded in:</small>
              </Col>
              <Col>
                <h6>2018</h6>
              </Col>
            </Row>
          </div>
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
