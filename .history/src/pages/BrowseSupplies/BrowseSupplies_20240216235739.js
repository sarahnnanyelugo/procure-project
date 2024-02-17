import React from "react";
import { useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { Deals } from "../../components/Deals/Deals";
import MoreDeals from "../../components/MoreDeals/MoreDeals";
import Navbar from "../../components/Navbar/Navbar";
import { RatedSuppliers } from "../../components/RatedSuppliers/RatedSuppliers";
import { Supplies } from "../../components/Supplies/Supplies";
import {
  todaysDeals,
  topCategories,
  topRatedSuppliers,
  trendingProducts,
  weeklyDeals,
} from "../../TestData";
import "./browse-supplies.scss";
export const BrowseSupplies = () => {
  const [state, setState] = useState({
    query: "",
    list: topCategories,
    list2: todaysDeals,
    list3: trendingProducts,
    list4: weeklyDeals,
    list5: topRatedSuppliers,
  });
  return (
    <>
      {" "}
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="top-categories-div mt8 mobile-padding">
        <div className="col-md-10 offset-md-1">
          <h2>Top Categories</h2>
          <div className="parent dn">
            {state.list.map((data, index) => (
              <Supplies data={data} />
            ))}
          </div>{" "}
          <div className="parent2">
            {state.list.map((data, index) => (
              <Supplies data={data} />
            ))}
          </div>
        </div>
        <div className="col-md-10 offset-md-1 mt">
          <div className="flexy flexyM">
            {" "}
            <h2>Today’s Deals</h2>
            <p className="mt1 deal-p"> | </p>
            <p className="mt1 deal-p">Shop now before its too late</p>
          </div>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {" "}
            {state.list2.map((data, index) => (
              <Deals data={data} />
            ))}
          </div>{" "}
          <h2 className="mt">Trending Products</h2>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {" "}
            {state.list3.map((data, index) => (
              <Deals data={data} />
            ))}
          </div>
        </div>
        <div className="col-md-10 offset-md-1 mt8 flexy ">
          <div className="col-md-4 discount-div ">
            <div className="flexy flexyM">
              <div className="half half1 col-md-1 half-position" />
              <div className="col-md-11 col-11">
                {" "}
                <h3>Suppliers Discounts</h3>
                <div className="discount-inner">
                  <div className="flexyM flexy">
                    <div className="col-md-7 col-6">
                      <h1>
                        10<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦5M</p>
                      <small>TechGadgets Ltd</small>
                    </div>
                    <div className="col-md-5 col-6">
                      <h1>
                        15<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦26M</p>
                    </div>
                  </div>

                  <hr />
                  <Row>
                    <Col md={8} className="flexy flexyM mt1">
                      <p>Code:</p>
                      <button className="code-btn">TCH214JJ</button>
                    </Col>
                    <Col md={4}>
                      <button className="app-btn">Collect</button>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="half half2 col-md-1 half-position" />
            </div>
            <div className="flexy flexyM mt5">
              <div className="half half1 col-md-1 half-position2" />
              <div className="col-md-11 col-11">
                {" "}
                <div className="discount-inner">
                  <div className="flexy flexyM">
                    <div className="col-md-7 col-6">
                      <h1>
                        10<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦5M</p>
                      <small>TechGadgets Ltd</small>
                    </div>
                    <div className="col-md-5 col-6">
                      <h1>
                        15<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦26M</p>
                    </div>
                  </div>

                  <hr />
                  <Row>
                    <Col md={6} className="flexy flexyM mt1">
                      <p>Code:</p>
                      <button className="code-btn">TCH214JJ</button>
                    </Col>
                    <Col md={}>
                      <button className="app-btn">Collect</button>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="half half2 col-md-1 half-position2" />
            </div>
          </div>
          <div className="col-md-8 wkd">
            <div className="weekly-deals">
              <h3>Weekly Deals</h3>
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
                {" "}
                {state.list4.map((data, index) => (
                  <MoreDeals data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt col-md-10 offset-md-1">
          {" "}
          <center>
            <h3>Top rated Suppliers</h3>
          </center>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
            {" "}
            {state.list5.map((data, index) => (
              <RatedSuppliers data={data} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
