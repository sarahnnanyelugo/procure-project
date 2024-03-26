import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const FInances = () => {
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
        <small>Step 3/6</small>
        <h4>Finances</h4>
        <p>Please tell us a little bit about your business</p>
      </center>
      <div className="col-md-6 offset-md-3">
        <p>What is your average turnover per year?</p>
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 0 ? "selected" : ""
              }`}
              onClick={() => handleClick(0)}
            >
              <p>New to wholesale</p>
            </div>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 1 ? "selected" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <p>₦100k or less</p>
            </div>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 2 ? "selected" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              <p>New to wholesale</p>
            </div>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 3 ? "selected" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              <p>New to wholesale</p>
            </div>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 4 ? "selected" : ""
              }`}
              onClick={() => handleClick(4)}
            >
              <p>New to wholesale</p>
            </div>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <div
              className={`business-detail-div-select  ${
                selectedDiv === 5 ? "selected" : ""
              }`}
              onClick={() => handleClick(5)}
            >
              <p>New to wholesale</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default FInances;
