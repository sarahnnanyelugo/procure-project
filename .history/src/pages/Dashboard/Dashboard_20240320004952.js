import React from "react";
import "./dashboard.scss";
export const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="flexy">
        <div className="col-md-8 data-count"></div>
        <div className="col-md-4"></div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
