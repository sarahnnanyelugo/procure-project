import React from "react";
import "./dashboard-top.scss";
export const Dashboard = () => {
  return (
    <>
      <div className="dash-top">
        <div className="flexy dash-btns" style={{ flexGrow: 1 }}>
          <button>Buy</button>
          <button>Sell</button>
        </div>
      </div>
    </>
  );
};
