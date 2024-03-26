import React from "react";
import "./dashboard-top.scss";
export const Dashboard = () => {
  return (
    <>
      <div className="dash-top flexy">
        <div className="flexy dash-btns flexyM" style={{ flexGrow: 1 }}>
          <button>Buy</button>
          <button>Sell</button>
        </div>
        <div className="flexy flexyM"></div>
      </div>
    </>
  );
};
