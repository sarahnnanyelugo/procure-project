import React from "react";
import { useState } from "react";
import { Deals } from "../../components/Deals/Deals";
import Navbar from "../../components/Navbar/Navbar";
import { Supplies } from "../../components/Supplies/Supplies";
import { todaysDeals, topCategories, trendingProducts } from "../../TestData";
import "./top-categories.scss";
export const TopCategories = () => {
  const [state, setState] = useState({
    query: "",
    list: topCategories,
    list2: todaysDeals,
    list3: trendingProducts,
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
            <p className="mt1"> | </p>
            <p className="mt1">Shop now before its too late</p>
          </div>
          <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
            {" "}
            {state.list2.map((data, index) => (
              <Deals data={data} />
            ))}
          </div>{" "}
          <h2>Trending Products</h2>
          <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
            {" "}
            {state.list3.map((data, index) => (
              <Deals data={data} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
