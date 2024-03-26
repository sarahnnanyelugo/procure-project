import React from "react";
import "./dashboard-top.scss";
export const DashboardTop = () => {
  return (
    <>
      <div className="dash-top flexy">
        <div className="flexy dash-btns flexyM">
          <button className="app-btn">Buy</button>
          <button>Sell</button>
        </div>
        <div className="flexy flexyM offset-md-7">
          <div className="dropdown">
            <button className="dropbtn">My account</button>
            <div className="dropdown-content">
              <a href="#home">Link1</a>
              <a href="#home">Link2</a>
              <a href="#home">Link3</a>
              <a href="#home">Link4</a>
            </div>
          </div>
          <select>
            <option>Eng</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </>
  );
};
