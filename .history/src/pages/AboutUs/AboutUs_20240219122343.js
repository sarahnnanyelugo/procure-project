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
              className="vid"
              width="100%"
              autoplay="true"
              loop="true"
              muted="true"
              playsinline=""
              src={Video}
            ></video>
            <div className=" overlay3 ">
              <center>
                <div className="col-md-6 col-12  mt ">
                  {" "}
                  <h6>EYZ Suppliers</h6>
                  <h1>Powering B2B e-commerce for bulk procurement</h1>
                  <p className="col-md-9">
                    Utilizing EYZ Solutions for your sales endeavors allows you
                    to access B2B customers, providing the pricing, selection,
                    and convenience. This platform incorporates tailored
                    features and advantages intended to cater to businesses of
                    varying sizes.
                  </p>
                  <center>
                    <button className="app-btn">Get started</button>
                    <button className="contact-btn">Contact us</button>
                  </center>
                </div>
              </center>
            </div>
          </div>
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
