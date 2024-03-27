import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";

export const OverviewDashboard = () => {
  return (
    <>
      <div className="flexy">
        <div className="col-md-2">
          {" "}
          <DashboardNav />
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
