import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import Navbar from "../../components/Navbar/Navbar";
import { User } from "../User/User";

export const DashboardLayout = () => {
  return (
    <>
      <div id={NavId} className="general-container">
        {showNav && <Header />}
        <div className="contents-container">
          <Routes>
            <Route index element={<SignInPage />} />
            <Route path="dashboard" element={<OverviewPage />} />
            <Route path="view" element={<View />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="Help" element={<Help />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="remitance-setup" element={<PaymentMethod />} />
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="new" element={<Generate_Invoice_Page />} />
            <Route path="history" element={<History />} />
            <Route path="subscriptions" element={<Subscription />} />
          </Routes>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
