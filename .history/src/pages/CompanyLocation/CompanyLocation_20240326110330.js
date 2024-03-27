import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/detail-icon.svg";
import Logo from "../../assets/images/logo.svg";
import CountrySelector from "../../components/CountrySelector/CountrySelector";

import "./company-detail.scss";
export const CompanyLocation = () => {
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
        <small>Step 6/6</small>
        <h4>Company Locations</h4>
        <p>Where is your company located</p>
      </center>
      <div className="col-md-6 offset-md-3 business-detail-div">
        <p>Address*</p>
        <div className="business-detail-div-select">
          <input
            className="business-detail-div-select"
            type="text"
            style={{ width: "100%" }}
            placeholder="Enter address"
          />
        </div>{" "}
        <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
          <div className="col">
            <p>VAT number</p>
            <input
              className="business-detail-div-select"
              type="text"
              style={{ width: "100%" }}
              placeholder="Enter number"
            />
          </div>
          <div className="col">
            <p>Registration number *</p>
            <input
              className="business-detail-div-select"
              type="text"
              style={{ width: "100%" }}
              placeholder="Enter number"
            />
          </div>
        </div>
      </div>
      <div className="flexy flexyM offset-md-7 mt7">
        <Link to={"/buy-products"}>
          <button className="prevd-btn">Previous</button>
        </Link>{" "}
        <Link to={"/finances"}>
          <button className="app-btn">Next</button>
        </Link>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
