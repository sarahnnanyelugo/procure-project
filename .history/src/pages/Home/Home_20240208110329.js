import React from "react";
import "./home.scss";
import Video from "../../assets/images/web-video.mp4";
import Navbar from "../../components/Navbar/Navbar";
export const Home = () => {
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
          <div className="col-md-6 col-12 offset-md-1 mt">
            {" "}
            <h1>
              Procure your bulk items <br />
              without stress
            </h1>
          </div>

          <div className="col-md-6 offset-md-1 mt6 input-div">
            {" "}
            <input placeholder="What are you looking to buy?" />
            <div className="input-overlay flexy flexyM col-md-12">
              <div className="col-md-10">&nbsp;</div>
              <button className="app-btn">Sign up</button>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 mt1 flexy popular-searches">
            <h6>Popularly searched:</h6>
            <button>Shoes</button>
            <button>Car parts</button>
            <button>Electronics</button>
            <button>Laptop</button>
          </div>
        </div>
      </div>
    </>
  );
};
