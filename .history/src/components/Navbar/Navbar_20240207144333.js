import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
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
              <NavLink to={""} className="app-btn">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flexy">
          <h6 style={{ flexGrow: 1 }}>All Categories</h6>
          <ul className="list-unstyled list-inline nav-pages">
            <li className="list-inline-item">
              <NavLink to={""}>Membership</NavLink>
              <NavLink to={""}>Featured Stores</NavLink>
              <NavLink to={""}>Help Center</NavLink>
              <NavLink to={""}>Become a Supplier</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
