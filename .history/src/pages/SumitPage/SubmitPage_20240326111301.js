import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/detail-icon.svg";
import Logo from "../../assets/images/logo.svg";
import CountrySelector from "../../components/CountrySelector/CountrySelector";

import "./company-detail.scss";
export const SubmitPage = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (index) => {
    setSelectedDiv(index === selectedDiv ? null : index); // toggle the selected div
  };
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
        <small>Step 5/6</small>
        <h1>Company Details</h1>
        <p>Tell us more about your company</p>
        <Link to={"/company-location"}>
          <button className="app-btn">Next</button>
        </Link>
      </center>

      <div style={{ height: "300px" }} />
    </>
  );
};
