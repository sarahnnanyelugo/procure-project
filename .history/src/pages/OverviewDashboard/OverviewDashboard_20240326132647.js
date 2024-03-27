import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { DashboardTop } from "../../components/DashboardTop/DashboardTop";
import Icon from "../../assets/images/note.svg";
import "./overview-dashboard.scss";
import { NoData } from "./NoData";
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
          <NoData />
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
