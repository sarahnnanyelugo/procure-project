import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
      <ul className="list-unstyled">
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
    </>
  );
};

export default DashboardNav;
