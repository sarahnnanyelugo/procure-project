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
            <Link className="offset-md-10 " to={"/dashboard-layout"}>Skip</Link>
            <center>
              {" "}
              <img src={Welcome} />
            </center>
          </div>
          <div className="welcome-card-footer">
            <h5>We’re here with you every step of the way</h5>

            <p>
              Our support team helps all our customers all over to become
              successful in purchase. We support via Email, Chat and Call
            </p>
            <div className="flexy flexyM">
              <div className="flexy flexyM mt1" style={{ flexGrow: 1 }}>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="active-dot"></span>
              </div>
              <div className="flexy flexyM">
                <Link to={"/onboarding2"}>
                  {" "}
                  <button className="prev-btn">Previous</button>
                </Link>
                <Link to={"/dashboard-layout"}>
                  {" "}
                  <button className="app-btn">Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
