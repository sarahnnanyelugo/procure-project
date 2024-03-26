import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import Navbar from "../../components/Navbar/Navbar";
import { User } from "../User/User";

export const DashboardLayout = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <div className="col-md-12 flexy" style={{ overflowX: "hidden" }}>
                <div className="col-md-2">
                  <DashboardNav />
                </div>
                <div className="col-md-10">
                  <Navbar />
                </div>
              </div>
            </>
          }
        >
          <Route
            path="/dashboard"
            element={
              <div className="dashboard col-md-12 flexy">
                {/* <div className="col-md-8">
                  <div className="statement col-md-11">
                    <StatementComponent />
                  </div>
                  <div className="dashboard-transaction-table-container col-md-11">
                    <TransactionTable
                      data={recentTransactions}
                      tableTitle="Recent Transaction"
                    />
                  </div>
                </div> */}
                {/* <div className="col-md-4  card-holder">
                  <div className="col-md-10 mx-auto default-card-holder">
                    <header className="card-header">My Card</header>
                    <CardUser
                      firstName={user.first_name}
                      lastName={user.last_name}
                    />
                  </div>
                  <div
                    className="col-md-10 mx-auto"
                    style={{ transform: "translateY(-3.5rem)" }}
                  >
                    <CardSilver
                      firstName={user.first_name}
                      lastName={user.last_name}
                    />
                  </div>
                  <div className="col-md-12">
                    <MerchantComponent />
                  </div>
                </div> */}
              </div>
            }
          />
          <Route exact path="*" element={<Navigate to="dashboard-layout" />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>

      <div style={{ height: "300px" }} />
    </>
  );
};
