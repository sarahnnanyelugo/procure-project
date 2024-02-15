import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./success-stories.scss";
import Banner from "../../../assets/images/stories-banner.png";
import Teller from "../../../assets/images/story-teller.png";
import { Col, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { categoriesData, mainStories } from "../../../TestData";
export const SuccessStories = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const location = useLocation();
  const { blog_id } = useParams();
  useEffect(() => {
    setId(blog_id);
    console.log(blog_id);
  }, [blog_id]);

  useEffect(() => {
    if (id !== 0)
      setData(
        categoriesData.find((obj) => {
          return obj.id == id;
        })
      );
    // console.log(data, research, id);
  }, [id]);
  const [state, setState] = useState({
    query: "",
    list: categoriesData.filter((newsItem) => {
      return newsItem.id > 4;
    }),
  });
  // const mappedData = categoriesData.moreInfo.map((item, index) => (
  //   <span key={index}>{item}</span>
  // ));

  return (
    <>
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="stories-div col-md-10 offset-md-1">
        <div className="flexy flexyM bread">
          <p className="b1">Success stories</p> /
          <p className="b2">Success stories</p>
        </div>
        {/* <img src={data.mainImg} width="100%" /> */}
        <div className="flexy mt4 pre-info">
          {/* <h1 className="col-md-5 ">{data.detail}</h1> */}
          <div className="flexy flexyM col-md-4 offset-md-3">
            <div className="flexy flexy">
              <img src={data.profileImg} width="48px" height="48px" />
              <div>
                <h6>{data.profileName}</h6>
                <small>{data.position}</small>
              </div>
            </div>
            <div className="offset-md-1">
              <small>{data.companyName}</small>
              <br />
              <small>{data.location}</small>
            </div>
          </div>
        </div>
        <div className="flexy">
          {" "}
          <div className="col-md-5 description mt5">
            <h4>About {data.companyName}</h4>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Name:</small>
              </Col>
              <Col>
                <h6>{data.companyName}</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Category:</small>
              </Col>
              <Col>
                <h6>{data.category}</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Location:</small>
              </Col>
              <Col>
                <h6>{data.location}</h6>
              </Col>
            </Row>
            <Row className="mt2">
              <Col sm={6} md={3}>
                <small>Founded in:</small>
              </Col>
              <Col>
                <h6>{data.year}</h6>
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
          <div className="col-md-7 mt5 profile-info">
            {/* <p>{mappedData}</p> */}
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
