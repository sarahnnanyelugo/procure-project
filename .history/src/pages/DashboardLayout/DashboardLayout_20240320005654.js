import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { DashboardTop } from "../../components/DashboardTop/DashboardTop";
import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../Dashboard/Dashboard";
import { User } from "../User/User";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flexy">
        <div className="col-md-2">
          <DashboardNav />
        </div>
        <div className="col-md-10" style={{ padding: "0px 20px" }}>
          <DashboardTop />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/user" element={<User />} />{" "}
          </Routes>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
};
