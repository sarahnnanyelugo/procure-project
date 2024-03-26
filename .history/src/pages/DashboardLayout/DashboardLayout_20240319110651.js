import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import Navbar from "../../components/Navbar/Navbar";
import { User } from "../User/User";

export const DashboardLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

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

          <Route path="user" element={<User />} />
          {/* <Route path="invoices" element={<UnpaidInvoice />} />
          <Route path="cardCategories" element={<CardcategoryPage />} />
          <Route path="account" element={<MyUpgradedAccount />} />
          <Route
            path="my cards"
            element={
              <MyCardsSilver
                firstName={user.first_name}
                lastName={user.last_name}
              />
            }
          /> */}
          {/* <Route path="settings" element={<Settings />} /> */}
          {/* <Route
            path="profile"
            element={
              <ProfilePage
                userName={{
                  firstName: user.first_name,
                  lastName: user.last_name,
                }}
              />
            }
          /> */}
          {/* <Route path="help" element={<HelpForm />} /> */}
          {/* <Route path="faq" element={<Faq />} /> */}
          {/* <Route path="customer-support" element={<Feedback />} /> */}
          {/* <Route path="payment-page" element={<PaymentPage />} /> */}
          {/* <Route exact path="*" element={<Navigate to="/" />} /> */}
        </Route>
        {/* <Route exact path="reset-password" element={<ResetPassword />} /> */}
        {/* <Route path="signin" element={<SignInPage />} /> */}
      </Routes>

      <div style={{ height: "300px" }} />
    </>
  );
};
