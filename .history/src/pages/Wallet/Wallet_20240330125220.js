import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransactionTable from "./WalletTable/WalletTable";
import "./wallet.scss";
import { walletData } from "../../TestData";
import Card from "../../assets/images/card-icon.png";
import Edit from "../../assets/images/edit.svg";
import Trash from "../../assets/images/trash.svg";
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
            {/* <center>
              <small>No payment method</small>
            </center> */}
            <input className="card-input" placeholder="* * * * * 4568" />
            <div className="flexy flexyM card-input-icons">
              <div style={{ flexGrow: 1 }}>
                <img src={Card} height="42px" width="61px" />
              </div>
              <div className="flexy flexyM">
                <img
                  src={Edit}
                  height="20px"
                  width="20px"
                  style={{ flexGrow: 1 }}
                />
                <img
                  src={Trash}
                  height="20px"
                  width="20px"
                  style={{ flexGrow: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transact-history mt3">
        <h3>Transaction History</h3>
        <div className="wallet-table">
          {" "}
          <div className="filtering-btns filtering-btns2">
            <button
              className={` prd-actived ${category === "*" ? "actived" : ""}`}
              onClick={() => setCat("*")}
            >
              All
            </button>
            <button
              className={`${category === "pending" ? "actived" : ""}`}
              onClick={() => setCat("pending")}
            >
              Pending
            </button>
            <button
              className={` ${category === "completed" ? "actived" : ""}`}
              onClick={() => setCat("completed")}
            >
              Completed
            </button>{" "}
            <button
              className={`${category === "cancelled" ? "actived" : ""}`}
              onClick={() => setCat("cancelled")}
            >
              Cancelled
            </button>{" "}
          </div>
          <div>
            <TransactionTable data={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
};
