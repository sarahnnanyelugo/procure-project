import React from "react";
import "./home.scss";
import Video from "../../assets/images/web-video.mp4";
import Navbar from "../../components/Navbar/Navbar";
export const Home = () => {
  return (
    <>
      <div id="cover">
        <video
          className="viddeo "
          width="100%"
          height="100%"
          autoplay="true"
          loop="true"
          muted="true"
          playsinline=""
          src={Video}
        ></video>
        <div className=" col-md-12 overlay">
          <Navbar />
          <div className="col-md-5 col-12 offset-md-1">
            <div className="col-md-12  first-heading mt">
              {" "}
              <center>
                <h1>Procure your bulk items without stress</h1>
              </center>
            </div>
            <div className="col-md-12 ">
              {" "}
              <center>
                {" "}
                <input />
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
