import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video.mp4";
import "./become-supplier.scss";
export const BecomeSupplier = () => {
  return (
    <>
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
        <div className=" col-md-12 overlay become-supplier-overlay">
          <Navbar colo="#fff" />
          <center>
            <div className="col-md-6 col-12 offset-md-1 mt ">
              {" "}
              <h6>EYZ Suppliers</h6>
              <h1>Reach millions of business customers worldwide</h1>
              <p className="col-md-9">
                Utilizing EYZ Solutions for your sales endeavors allows you to
                access B2B customers, providing the pricing, selection, and
                convenience. This platform incorporates tailored features and
                advantages intended to cater to businesses of varying sizes.
              </p>
              <center>
                <button className="app-btn">Get started</button>
                <button className="contact-btn">Contact us</button>
              </center>
            </div>
          </center>
        </div>
      </div>
      <center>
        <div className="col-md-8">
          <h1>
            ProCURED helps Businesses to procure in a more cost effective way
          </h1>
        </div>
      </center>
    </>
  );
};
