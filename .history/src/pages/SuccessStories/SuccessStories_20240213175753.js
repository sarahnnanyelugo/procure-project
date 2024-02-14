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
        <div className="flexy mt4">
          <h1 className="col-md-5 ">
            Revolutionizing Global Tech Accessory Sale
          </h1>
          <div className="flexy flexyM">
            <div className="flexy flexy">
              <img src={Banner} width="48px" height="48px" />
            </div>
          </div>
        </div>
        <div className="flexy">
          {" "}
          <div className="col-md-5 description mt5">
            <h4>About TechGadgets Ltd</h4>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Name:</small>
              </Col>
              <Col>
                <h6>TechGadgets Ltd</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Category:</small>
              </Col>
              <Col>
                <h6>Sports & Entertainment</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Location:</small>
              </Col>
              <Col>
                <h6>Oluyole, Ibadan, Nigeria</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Founded in:</small>
              </Col>
              <Col>
                <h6>2018</h6>
              </Col>
            </Row>
          </div>
          <div className="col-md-7 mt5 profile-info">
            <p>
              TechGadgets Ltd, a small startup specializing in innovative tech
              accessories, found unprecedented success on Alibaba.com.
              Leveraging the platform’s global reach, they showcased their
              unique products to a diverse audience.
            </p>
            <p>
              Within a year, TechGadgets Ltd achieved a 300% increase in
              international sales. The platform’s user-friendly interface and
              effective marketing tools allowed them to connect with businesses
              across continents. TechGadgets Ltd not only expanded its customer
              base but also formed long-term partnerships with international
              distributors.
            </p>
            <p>Founder and CEO, Sarah Thompson, shared,</p>
            <p>
              <strong>
                “ProCURED provided the exposure we needed. Our products are now
                in the hands of customers from Asia to Europe. The platform’s
                features allowed us to scale our business beyond our initial
                expectations.”
              </strong>
            </p>
            <h5>How TechGadgets succeeded</h5>
            <p>
              Strategic Product Positioning: TechGadgets Ltd strategically
              positioned their unique tech accessories on ProCURED, leveraging
              the platform’s extensive reach to connect with a global audience
              interested in innovative gadgets.
            </p>
            <p>
              Effective Marketing Campaigns: The company utilized ProCURED’s
              marketing tools to run targeted campaigns, creating buzz around
              their products and attracting international attention.
            </p>
            <p>
              Collaborative Partnerships: TechGadgets Ltd fostered
              collaborations with international distributors discovered through
              the platform, expanding their reach to new markets.
            </p>
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
