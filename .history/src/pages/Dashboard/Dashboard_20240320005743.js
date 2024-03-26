import React from "react";
import "./dashboard.scss";
export const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="flexy">
        <div className="col-md-8 " style={{ paddingRight: "20px" }}>
          <div className="data-count flexy">
            <div className="col-md-4 counters"></div>
            <div className="col-md-4 counters"></div>
            <div className="col-md-4 counters"></div>
          </div>
        </div>
        <div className="col-md-4 profile-details"></div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
