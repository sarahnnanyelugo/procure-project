import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./dashboard-top.scss";
export const DashboardTop = () => {
  return (
    <>
      <div className="dash-top flexy">
        <div className="flexy dash-btns flexyM">
          <button className="app-btn">Buy</button>
          <Link to={"/buy-products"}>
            {" "}
            <button>Sell</button>
          </Link>
        </div>
        <div className="flexy flexyM offset-md-7">
          <div className="dropdown">
            <button className="dropbtn">My account</button>
            <div className="dropdown-content">
              <NavLink href="#home">Patrick Benson</NavLink>
              <NavLink to={"./acc-details"}>Account Details</NavLink>
              <a href="#home">Logout</a>
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
