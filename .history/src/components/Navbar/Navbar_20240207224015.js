import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Menu from "./Menu/Menu";
import "./navbar.scss";
export default function Navbar() {
  return (
    <>
      <div className="col-md-10 offset-md-1 top-nav-container">
        <div className="flexy">
          {" "}
          <div className="logo-div ">
            <img width="100%" src={Logo} alt="" className="col-md-2" />
          </div>
          <ul className="list-unstyled list-inline nav-actions mt1">
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
              <NavLink to={""} className="app-btn">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flexy mt1">
          <ul className="list-unstyled list-inline nav-pages">
            <li className="list-inline-item">
              <NavLink to={""}>Membership</NavLink>{" "}
            </li>
            <li className="list-inline-item">
              <NavLink to={""}>Featured Stores</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to={""}>Help Center</NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={""}>Become a Supplier</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
