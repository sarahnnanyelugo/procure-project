import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <NavLink>Dashboard</NavLink>
        </li>{" "}
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </>
  );
};

export default DashboardNav;
