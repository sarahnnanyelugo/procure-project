import React from "react";
import "./onboarding.scss";
import Welcome from "../../assets/images/welcome.png";
import { Link } from "react-router-dom";

export const Onboarding1 = () => {
  return (
    <div className="onboarding-bg">
      <center>
        <div className="col-md-3 welcome-card">
          <div className="welcome-card-inner">
            <Link className="offset-md-10">Skip</Link>
            <center>
              {" "}
              <img src={Welcome} />
            </center>
          </div>
          <div className="welcome-card-footer">
            <h5>Hi Patrick,</h5>
            <h5>Welcome to ProCURED</h5>
            <p>
              Explore over 10,000+ product categories. Order online from our
              bestsellers through our B2B wholesale platform.
            </p>
            <div className="flexy flexyM">
              <div className="flexy flexyM mt1" style={{ flexGrow: 1 }}>
                <span className="active-dot"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <Link to={"/onboarding2"}>
                {" "}
                <button className="app-btn">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
