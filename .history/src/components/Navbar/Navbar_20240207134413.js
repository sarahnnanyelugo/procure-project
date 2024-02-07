import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./navbar.scss";
export default function Navbar() {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy nav-container">
        <div className="logo-div col-md-1">
          <img width="100%" src={Logo} alt="" />
        </div>
        <ul className="list-unstyled list-inline nav-actions">
          <li className="list-inline-item">
            {" "}
            <NavLink to={""}>Cart</NavLink>
          </li>
          <li className="list-inline-item">
            {" "}
            <NavLink to={""}>Log in</NavLink>
          </li>
          <li className="list-inline-item">
            {" "}
            <NavLink to={""}>
              <button className="app-btn">Sign up</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
