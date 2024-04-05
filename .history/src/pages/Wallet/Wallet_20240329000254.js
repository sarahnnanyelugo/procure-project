import React, { useState } from "react";
import { Link } from "react-router-dom";
import TransactionTable from "./TransactionTable/TransactionTable";
import "./wallet.scss";
import { walletData } from "../../TestData";
export const Wallet = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <h3>Wallet</h3>
      <div className="flexy">
        <div className="col-md-3 total-div">
          {" "}
          <p>Total</p>
          <h1>0.00</h1>
          <center>
            {" "}
            <button>Fund my wallet</button>
          </center>
        </div>
        <div className="col-md-9 " style={{ paddingLeft: "20px" }}>
          <div className="cards-div">
            <div className="flexy flexyM">
              <p>Cards</p>
              <Link>+ Add another account</Link>
            </div>
            <center>
              <small>No payment method</small>
            </center>
          </div>
        </div>
      </div>
      <div className="transact-history mt3">
        <h3>Transaction History</h3>
        <div className="wallet-table">
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
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <TransactionTable data={walletData} tableTitle="Transactions" />
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              {/* <TransactionTable
                data={accountCredits}
                tableTitle="Transactions"
              /> */}
              2
            </div>
            <div className={`panel ${checkActive(3, "active2")}`}>
              {/* <TransactionTable data={moneySpent} tableTitle="Transactions" /> */}
              3
            </div>
            <div className={`panel ${checkActive(4, "active2")}`}>
              {/* <TransactionTable data={refund} tableTitle="Transactions" /> */}
              4
            </div>
            <div className={`panel ${checkActive(5, "active2")}`}>
              {/* <TransactionTable data={withdrawal} tableTitle="Transactions" /> */}
              5
            </div>
            <div className={`panel ${checkActive(6, "active2")}`}>
              {/* <TransactionTable
                data={regularPayments}
                tableTitle="Transactions"
              /> */}
              6
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
