import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";
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
      <div style={{ height: "300px" }} />
    </>
  );
};
