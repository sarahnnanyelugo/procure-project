import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { DashboardTop } from "../../components/DashboardTop/DashboardTop";
import Navbar from "../../components/Navbar/Navbar";
import AccountDetails from "../AccDetails/AccountDetails";
import { Dashboard } from "../Dashboard/Dashboard";
import { Favourites } from "../Favourites/Favourites";
import { Messages } from "../Messages/Messages";
import { Orders } from "../Orders/Orders";
import ProductRequests from "../ProductRequests/ProductRequests";
import { User } from "../User/User";
import { Wallet } from "../Wallet/Wallet";

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
            <Route path="/favourites" element={<Favourites />} />{" "}
            <Route path="/product-requests" element={<ProductRequests />} />{" "}
            <Route path="/order-page" element={<Orders />} />{" "}
            <Route path="/messages" element={<Messages />} />{" "}
            <Route path="/wallet" element={<Wallet />} />{" "}
            <Route path="/acc-details" element={<AccountDetails />} />{" "}
          </Routes>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
};
