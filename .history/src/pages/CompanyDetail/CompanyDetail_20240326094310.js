import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/detail-icon.svg";
import Logo from "../../assets/images/logo.svg";

import "./company-detail.scss";
export const CompanyDetail = () => {
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
        <small>Step 2/6</small>
        <h4>Business Details</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
      <div className="col-md-6 offset-md-3 business-detail-div">
        <p>Is your store physical or online?</p>
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 0 ? "selected" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Physical store</p>
        </div>{" "}
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 1 ? "selected" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Online store</p>
        </div>{" "}
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 2 ? "selected" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Both</p>
        </div>{" "}
        <br />
        <p>How long have you been selling?</p>
        <div className="business-detail-div-select">
          <select>
            <option>
              <p>Select experience</p>
            </option>
            <option>
              <p>Two years</p>
            </option>
            <option>
              <p>Five years</p>
            </option>
            <option>
              <p>Ten years</p>
            </option>
          </select>
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
