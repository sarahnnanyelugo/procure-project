import React from "react";
import { Link } from "react-router-dom";
import "./buy-products.scss";
import Logo from "../../assets/images/logo.svg";

export const BuyProducts = () => {
  return (
    <>
      <div className="top-part flexy">
        {" "}
        <div className="dash-logo ">
          {" "}
          <Link to={"/"}>
            <img src={Logo} width="100%" />
          </Link>
        </div>
        <Link to={"/"} className="offset-md-8">
          Log out
        </Link>
      </div>
      <center className="mt6">
        <small>Step 1/6</small>
        <h4>Welcome to ProCURED</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
      <div style={{ height: "300px" }} />
    </>
  );
};
