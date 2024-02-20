import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video2.mp4";

import "./about-us.scss";
export const AboutUs = () => {
  return (
    <>
      <div className="nav-displayer2">
        <Navbar colo="#fff" />
      </div>
      <div className="about-banner">
        <div className="offset-md-2 col-md-8 video-div">
          <div id="cover ">
            <video
              className="vid vid-3"
              width="100%"
              autoplay="true"
              loop="true"
              muted="true"
              playsinline=""
              src={Video}
            ></video>
            <div className=" overlay3  col-md-8">
              <div className="col-md-12 col-12  mt ">
                {" "}
                <h6>About us</h6>
                <h1>Powering B2B e-commerce for bulk procurement</h1>
              </div>
            </div>
          </div>
        </div>
        <center>
          {" "}
          <div className="col-md-9">
            <p>
              More than a thousand businesses are on ProCURED, the platform
              designed for Industries and international chains.
            </p>
          </div>
        </center>
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
