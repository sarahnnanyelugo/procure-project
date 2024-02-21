import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video2.mp4";
import Img1 from "../../assets/images/delivery-group.png";
import Img2 from "../../assets/images/delivery-group2.png";
import Img3 from "../../assets/images/platform.png";
import Img4 from "../../assets/images/go.png";

import "./about-us.scss";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
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
          <div className="col-md-9 first-paragrapgh">
            <p>
              More than a thousand businesses are on ProCURED, the platform
              designed for Industries and international chains.
            </p>
          </div>
        </center>{" "}
        <div className="col-md-10  nd-paragrapgh offset-md-1 mt7">
          <hr />
          <div className="flexy">
            <div className="col-md-6 mt4">
              <p className="firstP">About ProCURED</p>
            </div>
            <div className="mt4">
              <p>
                One of the largest B2B wholesale marketplaces in the world.
                Founded in 2024 by Anderson Warri, ProCURED ecommerce platform
                has helped both sellers and buyers around the world, now with an
                end-to-end suite of tools built for B2B.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-steps flexy">
        <div className="offset-md-1 col-md-3">
          <img src={Img1} width="100%" />
        </div>
        <div className=" col-md-4">
          <center>
            <h5>Our Mission</h5>
          </center>
          <p>
            Provide businesses with a more cost effective, time saving and
            efficient way to carry out procurement.
          </p>
        </div>
        <div className=" col-md-3">
          {" "}
          <img src={Img2} width="100%" />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5 col-md-10 offset-md-1">
        <div className="col">
          <div className="prosss">
            <h2>All-in-one Platform</h2>
            <p>
              ProCURED offers an extensive range of products across major
              categories, spanning from consumer electronics and machinery to
              apparel. Buyers for these diverse products come from different
              countries and regions, engaging in hundreds of thousands of daily
              exchanges with suppliers on the platform.
            </p>
            <center>
              {" "}
              <img src={Img3} width="60%" />
            </center>
          </div>
        </div>{" "}
        <div className="col">
          <div className="prosss">
            <h2>Always on the GO!</h2>
            <p>
              We consistently evolve our services to empower businesses to
              accomplish more and explore fresh opportunities. ProCURED is your
              go-to solution for all your global business requirements.
            </p>
            <center>
              <img src={Img4} width="60%" />
            </center>
          </div>
        </div>
      </div>
      <div className="col-md-12 dashboard-display">
        <DashboardDisplay />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
