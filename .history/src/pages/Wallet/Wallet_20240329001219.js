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

  const [category, setCategory] = useState("*");
  const [filteredProducts, setFilteredProducts] = useState(walletData);
  function setCat(cat) {
    setCategory(cat);
  }
  useEffect(() => {
    if (category === "*") {
      setFilteredProducts(walletData);
    } else {
      setFilteredProducts(
        walletData.filter((prd) => prd.category.indexOf(category) !== -1)
      );
    }
  }, [category]);

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
              className={`btn prd-actived ${category === "*" ? "active2" : ""}`}
              onClick={() => setCat("*")}
            >
              All
            </button>
            <button
              className={`btn ${category === "pending" ? "active2" : ""}`}
              onClick={() => setCat("pending")}
              //   className={`tab ${checkActive(2, "active2")}`}
              //   onClick={() => handleClick(2)}
            >
              Pending
            </button>
            <button
              className={`btn ${category === "completed" ? "active2" : ""}`}
              onClick={() => setCat("completed")}
              //   className={`tab ${checkActive(3, "active2")}`}
              //   onClick={() => handleClick(3)}
            >
              Completed
            </button>{" "}
            <button
              className={`btn ${category === "canceled" ? "active2" : ""}`}
              onClick={() => setCat("canceled")}
            >
              Cancelled
            </button>{" "}
          </div>
          <div className="panels">
            <div >
              <TransactionTable data={walletData} tableTitle="Transactions" />
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              {/* <TransactionTable
                data={accountCredits}
                tableTitle="Transactions"
              /> */}
              2
            </div>
            <div >
              {/* <TransactionTable data={moneySpent} tableTitle="Transactions" /> */}
              3
            </div>
            <div >
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
