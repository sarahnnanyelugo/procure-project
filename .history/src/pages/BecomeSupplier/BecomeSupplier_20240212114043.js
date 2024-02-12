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
            <div className="col-md-6 col-12 offset-md-1 mt ">
              {" "}
              <h6>EYZ Suppliers</h6>
              <h1>Reach millions of business customers worldwide</h1>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
