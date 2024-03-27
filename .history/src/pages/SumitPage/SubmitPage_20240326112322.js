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
      <center className="buy-intro final-step">
        <div className="col-md-5">
          {" "}
          <h2>Thank you! Form submitted successfully</h2>
          <p>
            Thank you for offering to join us in providing products for ProCURED
            Your account would be reviewed by our administration team
          </p>
          <Link to={"/company-location"}>
            <button className="app-btn">Next</button>
          </Link>
        </div>
      </center>

      <div style={{ height: "300px" }} />
    </>
  );
};
