import React from "react";
import "./wallet.scss";
export const Wallet = () => {
  return (
    <>
      <h3>Wallet</h3>
      <div className="flexy">
        <div className="col-md-3 total-div"></div>
        <div
          className="col-md-9 cards-div"
          style={{ paddingLeft: "20px" }}
        ></div>
      </div>
    </>
  );
};
