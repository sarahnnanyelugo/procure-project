import React from "react";
import "./home.scss";
import Video from "../../assets/web-video.mp4";
export const Home = () => {
  return (
    <>
      <div id="outer" className="col-md-12">
        <div id="home-top-video">
          <video
            className="viddeo "
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src={Video}
          ></video>
          <div className=" col-md-12 flexy" id="home-text">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-5 logo-div col-12 col-sm-12">
              <div className="col-md-12 ">
                {" "}
                <center>
                  {" "}
                  <input />
                </center>
              </div>
              <div className="col-md-12  first-heading mt">
                {" "}
                <center>
                  <h1>
                    Being Named One of the Best Private Schools in Lagos,
                    Nigeria, Reflects Our Commitment to Excellence
                  </h1>
                  <button>LEARN MORE</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
