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
        <div className="flexy flexyM">
          <div className="dropdown">
            <button className="dropbtn">My account</button>
            <div className="dropdown-content">
              <a href="#home">Link1</a>
              <a href="#home">Link2</a>
              <a href="#home">Link3</a>
              <a href="#home">Link4</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
