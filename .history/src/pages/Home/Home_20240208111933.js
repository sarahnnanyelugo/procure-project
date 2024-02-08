import React from "react";
import "./home.scss";
import Video from "../../assets/images/web-video.mp4";
import Pricing from "../../assets/images/pricing.svg";
import Receipt from "../../assets/images/receipt.svg";
import Quality from "../../assets/images/quality.svg";
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
          <div className="col-md-6 offset-md-1 mt2 flexy popular-searches">
            <h6>Popularly searched:</h6>
            <button>Shoes</button>
            <button>Car parts</button>
            <button>Electronics</button>
            <button>Laptop</button>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mt brands">
        <p>Trusted By World’s Biggest Brands</p>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          <div className="col">
            <div className="benefits b-1">
              <img src={Pricing} height="36px" width="36px" />
              <h3>Cost effective bulk purchasing with consolidated delivery</h3>
              <p>
                Order from our verified suppliers with attractive discount
                offering and various product range and get it all in one
                delivery.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-2">
              <img src={Receipt} height="36px" width="36px" />
              <h3>Streamlined Ordering Process</h3>
              <p>
                Order in a seamless and efficient process. Our procurement
                process is straightforward, saving you time and effort.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-1">
              <img src={Pricing} height="36px" width="36px" />
              <h3>Comprehensive Product Range</h3>
              <p>
                Explore a range of comprehensive products for your business.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-1">
              <img src={Quality} height="36px" width="36px" />
              <h3>Quality Assurance and Warranty</h3>
              <p>
                Quality is paramount for us. We implement rigorous quality
                assurance measures to ensure that products you receive meet high
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
