import React from "react";
import Cam from "../../assets/images/cam.svg";
import Video from "../../assets/images/web-video.mp4";
import Navbar from "../../components/Navbar/Navbar";

export const VerifiedSupplier = () => {
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
          <div className="col-md-6 col-12 offset-md-1 mt mobile-padding">
            {" "}
            <h1>
              Procure your bulk items <br />
              without stress
            </h1>
          </div>

          <div className="col-md-6 offset-md-1 mt2 flexy popular-searches mobile-padding">
            <h6>Popularly searched:</h6>
            <button>Shoes</button>
            <button>Car parts</button>
            <button>Electronics</button>
            <button>Laptop</button>
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
