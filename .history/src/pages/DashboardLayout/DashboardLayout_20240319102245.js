import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";

export const DashboardLayout = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <div className="col-md-12 flexy" style={{ overflowX: "hidden" }}>
              <div className="col-md-2">
                <DashboardNav />
              </div>
              <div className="col-md-10">
                <TopNav
                  userName={{
                    firstName: user.first_name,
                    lastName: user.last_name,
                    passport: user.passport,
                  }}
                />
                <PrivateRoute>
                  <Outlet />
                </PrivateRoute>
              </div>
            </div>
          </>
        }
      >
        <Route
          path="/"
          element={
            <div className="dashboard col-md-12 flexy">
              <div className="col-md-8">
                <div
                  className="spending col-md-12 flexy"
                  style={{ marginTop: "-1rem" }}
                >
                  <div className="col-md-4">
                    <TotalMoney bg="#0E093F" totaltype="Balance" amt="$3000" />
                  </div>
                  <div className="col-md-4">
                    <TotalMoney bg="#F6A61F" totaltype="Spending" amt="$2000" />
                  </div>
                  <div className="col-md-4">
                    <TotalMoney bg="#201E34" totaltype="Saved" amt="$546" />
                  </div>
                </div>
                <div className="statement col-md-11">
                  <StatementComponent />
                </div>
                <div className="dashboard-transaction-table-container col-md-11">
                  <TransactionTable
                    data={recentTransactions}
                    tableTitle="Recent Transaction"
                  />
                </div>
              </div>
              <div className="col-md-4  card-holder">
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
              </div>
            </div>
          }
        />

        <Route path="transactions" element={<Transactions />} />
        <Route path="invoices" element={<UnpaidInvoice />} />
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
        />
        <Route path="settings" element={<Settings />} />
        <Route
          path="profile"
          element={
            <ProfilePage
              userName={{
                firstName: user.first_name,
                lastName: user.last_name,
              }}
            />
          }
        />
        <Route path="help" element={<HelpForm />} />
        <Route path="faq" element={<Faq />} />
        <Route path="customer-support" element={<Feedback />} />
        <Route path="payment-page" element={<PaymentPage />} />
        <Route exact path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
