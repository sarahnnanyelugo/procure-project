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
        <p>Please tell us a little bit about your business</p>
      </center>
      <div className="col-md-6 offset-md-3">
        <p>What is your average turnover per year?</p>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default FInances;
