import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";
import Trends from "../../assets/images/trends-merge.png";
import { Orders } from "../Orders/Orders";

export const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="flexy">
        <div className="col-md-8 " style={{ paddingRight: "20px" }}>
          <div className="data-count flexy">
            <div className="col-md-4 counters first">
              <center>
                <h5>Product Request</h5>
                <h1>5</h1>
              </center>
            </div>
            <div className="col-md-4 counters first">
              <center>
                <h5>Orders</h5>
                <h1>3</h1>
              </center>
            </div>{" "}
            <div className="col-md-4 counters">
              <center>
                <h5>Favorites</h5>
                <h1>16</h1>
              </center>
            </div>{" "}
          </div>
        </div>
        <div className="col-md-4 profile-details">
          <div className="flexy flexyM">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h3>Patrick Benson</h3>
              <small>PattyB@gmail.com</small>
              <br />
              <br />
              <Link to={""}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="market-trends flexy">
        <div className="col-md-5">
          {" "}
          <h6>Top Market Trends on ProCURED</h6>
          <p>Explore market trends to discover new business opportunities</p>
          <button>Explore Products</button>
        </div>
        <div className="col-md-4 offset-md-2">
          <img src={Trends} width="100%" />
        </div>
      </div>

      <div className="order-div">
        <Orders />
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
