import React from "react";
import { Link } from "react-router-dom";
import "./wallet.scss";
export const Wallet = () => {
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
      <div className="transact-history">
        <h3>Transaction History</h3>
      </div>
    </>
  );
};
