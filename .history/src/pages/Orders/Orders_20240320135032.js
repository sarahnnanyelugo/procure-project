import React, { useState } from "react";
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
  return (
    <>
      <div className="transaction-page">
        {" "}
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            All Payments
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Account Credit
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Money Spent
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Refund
          </button>{" "}
          <button
            className={`tab ${checkActive(5, "active2")}`}
            onClick={() => handleClick(5)}
          >
            Withdrawal
          </button>{" "}
          <button
            className={`tab ${checkActive(6, "active2")}`}
            onClick={() => handleClick(6)}
          >
            Regular Payments
          </button>
          {/* <span className="search">
            <SearchBar />
          </span> */}
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <OrderTable data={allTransactions} tableTitle="Transactions" />
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            <OrderTable data={accountCredits} tableTitle="Transactions" />
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            <OrderTable data={moneySpent} tableTitle="Transactions" />
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            <OrderTable data={refund} tableTitle="Transactions" />
          </div>
          <div className={`panel ${checkActive(5, "active2")}`}>
            <OrderTable data={withdrawal} tableTitle="Transactions" />
          </div>
          <div className={`panel ${checkActive(6, "active2")}`}>
            <OrderTable data={regularPayments} tableTitle="Transactions" />
          </div>
        </div>
      </div>
    </>
  );
};
