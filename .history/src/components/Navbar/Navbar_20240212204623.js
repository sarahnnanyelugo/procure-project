import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Menu from "./Menu/Menu";
import "./navbar.scss";
export default function Navbar(props) {
  const { colo, colo2 } = props;
  return (
    <>
      <div className="col-md-10 offset-md-1 top-nav-container col-12">
        <div className="flexy flexyM">
          {" "}
          <div className="logo-div ">
            <Link to={"/"}>
              {" "}
              <img width="100%" src={Logo} alt="" className="col-md-2 col-6" />
            </Link>
          </div>
          <ul className="list-unstyled list-inline nav-actions mt1 no-m ">
            <li className="list-inline-item">
              {" "}
              <NavLink to={""} style={{ color: colo }}>
                Cart
              </NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={""} style={{ color: colo }}>
                Log in
              </NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={""} className="app-btn">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flexy mt1 flexyM">
          <div style={{ flexGrow: 1 }} className="col-4">
            <Menu />
          </div>
          <ul className="list-unstyled list-inline nav-pages ">
            <li className="list-inline-item">
              <NavLink to={""} style={{ color: colo }}>
                Membership
              </NavLink>{" "}
            </li>
            <li className="list-inline-item">
              <NavLink to={""} style={{ color: colo }}>
                Featured Stores
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to={""} style={{ color: colo }}>
                Help Center
              </NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={"/become-supplier"} style={{ color: colo }}>
                Become a Supplier
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col-md-12">
        <Menu />
      </div> */}
    </>
  );
}
