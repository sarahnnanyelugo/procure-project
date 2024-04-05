import React from "react";
import "./wallet.scss";
export const Wallet = () => {
  return (
    <>
      <h3>Wallet</h3>
      <div className="flexy">
        <div className="col-md-3 total-div"></div>
        <div className="col-md-9 " style={{ paddingLeft: "20px" }}>
          <div className="cards-div">
            <p>Total</p>
            <h1>0.00</h1>
            <button>Fund my wallet</button>
          </div>
        </div>
      </div>
    </>
  );
};
