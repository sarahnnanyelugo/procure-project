import React from "react";
import "./careers.scss";
import Banner from "../../assets/images/career-banner.png";
import Navbar from "../../components/Navbar/Navbar";
export const Careers = () => {
  return (
    <>
      <div id="cover">
        <img src={Banner} width="100%" className="vid" />
        <div className=" col-md-12 overlay2">
          <Navbar colo="#fff" />
          <center>
            {" "}
            <div className="col-md-4 col-12 mtt mobile-padding">
              {" "}
              <h1>Careers</h1>
              <p className="col-md-11">
                We are building an exciting future of bulk procurement together.
                Join Us!!
              </p>
            </div>
          </center>
        </div>
      </div>
      <center className="career-title mt8">
        <h1>Come work with us</h1>
        <p>We would help your career growth exponentially</p>
      </center>
      <div className="prerks-div">
        <div className="col-md-10 offset-md-1 row row-cols-2 row-cols-lg-5 g-2 g-lg-3"></div>
      </div>
      <div className="prefooter-div col-md-8 offset-md-2 col-10 offset-1">
        <center>
          <h2>Ready to get started?</h2>
          <p>Register now to browse millions of goods from vetted vendors.</p>
          <button className="app-btn">Get started</button>
        </center>
      </div>
    </>
  );
};
