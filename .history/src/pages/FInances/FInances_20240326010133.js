import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const FInances = () => {
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
      <center className="mt6 buy-intro">
        <small>Step 3/6</small>
        <h4>Finances</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
    </>
  );
};

export default FInances;
