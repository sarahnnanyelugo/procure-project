import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>{" "}
        <li>
          <NavLink to={"user"}>user</NavLink>
        </li>
      </ul>
    </>
  );
};

export default DashboardNav;
