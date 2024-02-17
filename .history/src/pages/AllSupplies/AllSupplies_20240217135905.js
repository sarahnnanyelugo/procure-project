import React from "react";
import { useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BudgetProducts } from "../../components/BudgetProducts/BudgetProducts";
import { Deals } from "../../components/Deals/Deals";
import MoreDeals from "../../components/MoreDeals/MoreDeals";
import Navbar from "../../components/Navbar/Navbar";
import { RatedSuppliers } from "../../components/RatedSuppliers/RatedSuppliers";
import { RecommendedProduct } from "../../components/RecommendedProduct/RecommendedProduct";
import { Supplies } from "../../components/Supplies/Supplies";
import Accordion from "react-bootstrap/Accordion";

import {
  budgetProducts,
  recommendedProducts,
  todaysDeals,
  topCategories,
  topRatedSuppliers,
  trendingProducts,
  weeklyDeals,
} from "../../TestData";
import "./browse-supplies.scss";
export const AllSupplies = () => {
  const [state, setState] = useState({
    query: "",
    list: topCategories,
    list2: todaysDeals,
    list3: trendingProducts,
    list4: weeklyDeals,
    list5: topRatedSuppliers,
    list6: budgetProducts,
    list7: recommendedProducts,
  });
  return (
    <>
      {" "}
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="top-categories-div mt8 mobile-padding">
        <div className="col-md-10 offset-md-1">
          <div className="flexy flexyM bck-link">
            {" "}
            <Link className="" to={"/browse-supplies"}>
              Back
            </Link>{" "}
            {""} /{""} <p>All Suppliers</p>
          </div>
          <h2>Suppliers Categories</h2>
          <div className="parent dn mt3">
            {state.list.map((data, index) => (
              <Supplies data={data} />
            ))}
          </div>{" "}
          <div className="parent2">
            {state.list.map((data, index) => (
              <Supplies data={data} />
            ))}
          </div>
          <br />
          <hr />
        </div>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-3">
            <h5>Categories</h5>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-9"></div>
        </div>
        <div style={{ height: "200px" }} />
      </div>
    </>
  );
};
