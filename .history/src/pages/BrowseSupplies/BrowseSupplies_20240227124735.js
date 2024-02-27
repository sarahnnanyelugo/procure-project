import React, { useEffect } from "react";
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
  productCategories,
} from "../../TestData";
import "./browse-supplies.scss";
export const BrowseSupplies = () => {
  const [products, setProductsData] = useState([]);

  const [state, setState] = useState({
    query: "",
    // list: topCategories,
    list: [],
    list2: todaysDeals,
    list3: trendingProducts,
    list4: weeklyDeals,
    list5: topRatedSuppliers,
    list6: budgetProducts,
    list7: recommendedProducts,
  });
  useEffect(() => {
    if (!state.list || !Array.isArray(state.list)) {
      return <p>No data available</p>;
    }
    setProductsData(state.list5.slice(0, 4));
  }, []);
  useEffect(() => {
    const topCat = productCategories.filter(category);
  }, []);
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
                    <div className="col-md-9 col-9">
                      <h1>
                        10<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦5M</p>
                      <small>TechGadgets Ltd</small>
                    </div>
                    <div className="col-md-3 col-3">
                      <h1>
                        15<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦26M</p>
                    </div>
                  </div>

                  <hr />
                  <div className="flexy flexyM">
                    <div className="flexy flexyM  col-md-9 col-9">
                      <p>Code:</p>
                      <button className="code-btn">TCH214JJ</button>
                    </div>
                    <div className="col-md-3 col-3 ">
                      <button className="app-btn">Collect</button>
                    </div>
                  </div>
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
                    <div className="col-md-9 col-9">
                      <h1>
                        10<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦5M</p>
                      <small>TechGadgets Ltd</small>
                    </div>
                    <div className="col-md-3 col-3">
                      <h1>
                        15<sup>%</sup>
                        <sub>off</sub>
                      </h1>
                      <p>OVER ₦26M</p>
                    </div>
                  </div>

                  <hr />
                  <div className="flexy flexyM">
                    <div className="flexy flexyM col-md-9 col-9">
                      <p>Code:</p>
                      <button className="code-btn">TCH214JJ</button>
                    </div>
                    <div className="col-md-3 col-3">
                      <button className="app-btn">Collect</button>
                    </div>
                  </div>
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
          <div className="col-md-7 offset-md-5 flexy flexym">
            <h3 style={{ flexGrow: 1 }}>Top rated Suppliers</h3>
            <Link to={"/all-supplies"} className="all-supplies-link">
              View all supplies
            </Link>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
            {" "}
            {products.map((data, index) => (
              <RatedSuppliers data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="budget-div ">
        {" "}
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4 col-md-10 offset-md-1">
          {" "}
          {state.list6.map((data, index) => (
            <BudgetProducts data={data} />
          ))}
        </div>
        <br />
        <br />
        <br />
        <center>
          <h2>Recommended for you</h2>
        </center>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 col-md-10 offset-md-1">
          {" "}
          {state.list7.map((data, index) => (
            <RecommendedProduct data={data} />
          ))}
        </div>
        <center>
          <button>Load more</button>
        </center>
      </div>
      <div style={{ height: "200px" }} />
    </>
  );
};
