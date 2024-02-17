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

        <div style={{ height: "200px" }} />
      </div>
    </>
  );
};
