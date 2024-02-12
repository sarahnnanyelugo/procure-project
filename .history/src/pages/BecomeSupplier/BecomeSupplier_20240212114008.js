import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video.mp4";
export const BecomeSupplier = () => {
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
        <div className=" col-md-12 overlay">
          <Navbar colo="#fff" />
          <center>
            <div className="col-md-6 col-12 offset-md-1 mt mobile-padding">
              {" "}
              <h6>EYZ Suppliers</h6>
            </div>
          </center>
          <div className="col-md-6 offset-md-1 mt6 input-div mobile-padding">
            {" "}
            <input placeholder="What are you looking to buy?" />
            <div className="input-overlay flexy flexyM col-md-12 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};
