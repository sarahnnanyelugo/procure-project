import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { DashboardTop } from "../../components/DashboardTop/DashboardTop";

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
            <div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
