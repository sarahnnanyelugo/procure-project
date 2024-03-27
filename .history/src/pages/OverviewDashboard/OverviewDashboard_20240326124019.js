import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { DashboardTop } from "../../components/DashboardTop/DashboardTop";
import Icon from "../../assets/images/note.svg";
import "./overview-dashboard.scss";
export const OverviewDashboard = () => {
  return (
    <>
      <div className="flexy">
        <div className="col-md-2">
          {" "}
          <DashboardNav />
        </div>
        <div className="col-md-10" style={{ padding: "0px 20px" }}>
          <DashboardTop />
          <div className="overview-body mt5">
            <h2>Hello, Peter Olugbenga</h2>
            <p>Here’s an overview of your ProCURED account</p>
            <div class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3 mt7">
              <div className="col">
                <div className="summary-div flexy">
                  <div style={{ flexGrow: 1 }}>
                    {" "}
                    <p>Total Income</p>
                    <h5>₦0.00</h5>
                  </div>
                  <img src={Icon} width="24px" height="24px" />
                </div>
              </div>
              <div className="col">
                <div className="summary-div flexy">
                  <div style={{ flexGrow: 1 }}>
                    {" "}
                    <p>Total Income</p>
                    <h5>0</h5>
                  </div>
                  <img src={Icon} width="24px" height="24px" />
                </div>
              </div>
              <div className="col">
                <div className="summary-div flexy">
                  <div style={{ flexGrow: 1 }}>
                    {" "}
                    <p>Total Income</p>
                    <h5>0</h5>
                  </div>
                  <img src={Icon} width="24px" height="24px" />
                </div>
              </div>
            </div>
            <div className="flexy mt4">
              <div style={{ paddingRight: "6px" }} className="col-md-8">
                <div
                  className=" total-transaction"
                  style={{ marginRight: "3px" }}
                >
                  <div className="flexy flexyM">
                    {" "}
                    <div style={{ flexGrow: 1 }}>
                      {" "}
                      <p>Total Transaction Volume</p>
                      <h5>₦0</h5>
                    </div>
                    <select>
                      <option>Last 7 days</option>
                      <option>Last 2 weeks</option>
                      <option>Last 1 month</option>
                    </select>
                  </div>
                  <center>
                    <h6>No data</h6>
                    <small>All transaction volume would show here</small>
                  </center>
                </div>
              </div>
              <div className="col-md-4 total-transaction">
                <p>Trend Sale</p>
                <center>
                  <h6>No data</h6>
                  <small>Top trend sale would appear here</small>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
