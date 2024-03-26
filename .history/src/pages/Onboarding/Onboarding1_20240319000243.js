import React from "react";
import "./onboarding.scss";
import Welcome-img from "../../welcome.png"
export const Onboarding1 = () => {
  return (
    <div className="onboarding-bg">
      <center>
        <div className="col-md-3 welcome-card">
          <div className="welcome-card-inner"></div>
          <h5>Hi Patrick,</h5>
          <h5>Welcome to ProCURED</h5>
          <p>
            Explore over 10,000+ product categories. Order online from our
            bestsellers through our B2B wholesale platform.
          </p>
          <button className="app-btn">Next</button>
        </div>
      </center>
    </div>
  );
};
