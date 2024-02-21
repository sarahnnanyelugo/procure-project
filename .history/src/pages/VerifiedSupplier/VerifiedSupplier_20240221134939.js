import React from "react";
import Cam from "../../assets/images/cam.svg";
import Banner from "../../assets/images/v-banner.png";
import Navbar from "../../components/Navbar/Navbar";
import "./verified-supplier.scss";
export const VerifiedSupplier = () => {
  return (
    <>
      <div id="cover verified-div">
        <img className="vid" width="100%" playsinline="" src={Banner}></img>
        <div className=" col-md-12 overlay">
          <Navbar colo="#fff" />
          <center>
            <div className="col-md-6 col-12  mt mobile-padding">
              <h6>Become a verified supplier</h6>
              <h1>Build more trust with your customers</h1>
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
