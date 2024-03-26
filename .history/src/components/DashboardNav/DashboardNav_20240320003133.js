import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboard-nav.scss";
import Logo from "../../assets/images/logo.svg";
import Icon1 from "../../assets/images/dash.svg";
import Icon2 from "../../assets/images/requests.svg";
import Icon3 from "../../assets/images/messages.svg";
import Icon4 from "../../assets/images/heart.svg";

const DashboardNav = () => {
  return (
    <>
      <div className="dashboard-nav">
        <img src={Logo} width="100%" />
        <hr />
        <ul className="list-unstyled col-md-9 offset-md-2">
          <li>
            <NavLink to={"./dashboard"} activeClassName="active">
              Dashboard
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./product-requests"} activeClassName="active">
              Product Requests
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./others"} activeClassName="active">
              Others
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./messages"} activeClassName="active">
              Messages
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./walllets"} activeClassName="active">
              Wallets
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./favourites"} activeClassName="active">
              <img src={Icon4} width="100%" />
              My Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardNav;
