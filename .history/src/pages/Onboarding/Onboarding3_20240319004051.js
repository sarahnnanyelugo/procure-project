import React from "react";
import "./onboarding.scss";
import Welcome from "../../assets/images/welcome3.png";
import { Link } from "react-router-dom";

export const Onboarding3 = () => {
  return (
    <div className="onboarding-bg">
      <center>
        <div className="col-md-3 welcome-card">
          <div className="welcome-card-inner3">
            <Link className="offset-md-10">Skip</Link>
            <center>
              {" "}
              <img src={Welcome} />
            </center>
          </div>
          <div className="welcome-card-footer">
            <h5>We’re here with you every step of the way</h5>

            <p>
              We provide the most affordable wholesale products on the market
              hence giving you access to more products
            </p>
            <div className="flexy flexyM">
              <div className="flexy flexyM mt1" style={{ flexGrow: 1 }}>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="active-dot"></span>
              </div>
              <div className="flexy flexyM">
                <Link to={"/onboarding1"}>
                  {" "}
                  <button className="prev-btn">Previous</button>
                </Link>
                <button className="app-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
