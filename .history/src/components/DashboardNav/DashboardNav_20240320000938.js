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
          <NavLink to={"./product-requests"}>Others</NavLink>
        </li>{" "}
        <li>
          <NavLink to={"./product-requests"}>Messages</NavLink>
        </li>{" "}
        <li>
          <NavLink to={"./product-requests"}>Wallets</NavLink>
        </li>{" "}
        <li>
          <NavLink to={"./product-requests"}>Wallets</NavLink>
        </li>
      </ul>
    </>
  );
};

export default DashboardNav;
