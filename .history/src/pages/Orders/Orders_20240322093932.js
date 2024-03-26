import React, { useState } from "react";
import { dashboardData } from "../../TestData";
// import {
//   allTransactions,
//   accountCredits,
//   moneySpent,
//   withdrawal,
//   refund,
//   regularPayments,
// } from "../../TestData";
// import { ReturnMessage } from "../KYCForms/KYCFormsUpgradeMessages/ReturnMessage";
import "./orders.scss";
import OrderTable from "./OrderTable/OrderTable";
// import { transactions } from "../../TestData";

export const Orders = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [state, setState] = useState({
    query: "",

    list: dashboardData,
  });
  return (
    <>
      <div className="transaction-page">
        <h2>My Orders</h2>
        <hr />
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            All order
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Pending
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Completed
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Canceled
          </button>{" "}
         
        </div>
     
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            {/* <OrderTable data={dashboardData} /> */}
            {state.list.map((data, index) => (
              <OrderTable data={data} />
            ))}
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {/* <OrderTable data={accountCredits} tableTitle="Transactions" /> */}
            2
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            {/* <OrderTable data={moneySpent} tableTitle="Transactions" /> */}3
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            {/* <OrderTable data={refund} tableTitle="Transactions" /> */}4
          </div>
        </div>
      </div>
    </>
  );
};
