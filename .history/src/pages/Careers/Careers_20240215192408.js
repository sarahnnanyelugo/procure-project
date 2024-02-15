import React from "react";
import "./careers.scss";
import Banner from "../../assets/images/career-banner.png";
import Navbar from "../../components/Navbar/Navbar";
export const Careers = () => {
  return (
    <>
      <div id="cover">
        <video
          className="vid"
          width="100%"
          autoplay="true"
          loop="true"
          muted="true"
          playsinline=""
          src={Video}
        ></video>
        <div className=" col-md-12 overlay2">
          <Navbar colo="#fff" />
          <center>
            {" "}
            <div className="col-md-3 col-12 mt mobile-padding">
              {" "}
              <h1>Careers</h1>
              <p>
                We are building an exciting future of bulk procurement together.
                Join Us!!
              </p>
            </div>
          </center>
        </div>
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
