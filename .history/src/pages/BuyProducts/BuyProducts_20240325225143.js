import React from "react";
import { Link } from "react-router-dom";
import "./buy-products.scss";
import Logo from "../../assets/images/logo.svg";

export const BuyProducts = () => {
  return (
    <>
      <div className="top-part flexy">
        {" "}
        <div className="dash-logo" style={{ flexGrow: 1 }}>
          {" "}
          <Link to={"/"}>
            <img src={Logo} width="100%" />
          </Link>
        </div>
        <Link to={"/"}>
          <button>Log out</button>
        </Link>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
