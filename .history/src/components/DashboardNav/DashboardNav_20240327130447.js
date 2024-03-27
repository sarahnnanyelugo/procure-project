import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./dashboard-nav.scss";
import Logo from "../../assets/images/logo.svg";
import Icon1 from "../../assets/images/dash.svg";
import Icon2 from "../../assets/images/requests.svg";
import Icon3 from "../../assets/images/message.svg";
import Icon4 from "../../assets/images/heart.svg";
import Icon5 from "../../assets/images/sell-booth.png";

const DashboardNav = () => {
  return (
    <>
      <div className="dashboard-nav">
        <div className="dash-logo">
          {" "}
          <Link to={"/"}>
            <img src={Logo} width="100%" />
          </Link>
        </div>
        {/* <hr /> */}
        <ul className="list-unstyled col-md-9 offset-md-2">
          <li>
            <NavLink to={"./dashboard"} activeClassName="active">
              <img src={Icon2} width="20px" height="20px" />
              Dashboard
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/product-requests"} activeClassName="active">
              <img src={Icon2} width="20px" height="20px" /> Product Requests
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./others"} activeClassName="active">
              <img src={Icon2} width="20px" height="20px" /> Others
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./messages"} activeClassName="active">
              <img src={Icon2} width="20px" height="20px" />
              Messages
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./walllets"} activeClassName="active">
              <img src={Icon3} width="20px" height="20px" /> Wallets
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"./favourites"} activeClassName="active">
              <img src={Icon4} width="20px" height="20px" />
              My Favourites
            </NavLink>
          </li>
        </ul>
        <div className="seller-div">
          <img src={Icon5} width="100%" />
          <h5>Become a Seller on ProCURED</h5>
          <button>Start Selling</button>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
