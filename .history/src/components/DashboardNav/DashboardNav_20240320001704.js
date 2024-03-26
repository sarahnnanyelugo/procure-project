import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboard-nav.scss";
const DashboardNav = () => {
  return (
    <>
      <div className="dashboard-nav">
        {" "}
        <ul className="list-unstyled col-md-8 offset-md-2">
          <li>
            <NavLink to={"./dashboard"}>Dashboard</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./product-requests"}>Product Requests</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./others"}>Others</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./messages"}>Messages</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./walllets"}>Wallets</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./favourites"}>My Favourites</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardNav;
