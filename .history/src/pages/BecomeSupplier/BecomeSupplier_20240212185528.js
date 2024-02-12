import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video2.mp4";
import Icon1 from "../../assets/images/range.svg";
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
        <div className="col-md-8 supplier-intros">
          <h1>
            ProCURED helps Businesses to procure in a more cost effective way
          </h1>
        </div>
      </center>
      <div className="empty-div col-md-10 offset-md-1"></div>
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt2 mobile-padding col-md-10 offset-md-1 pros-container">
        <div className="col">
          <div className="pros-div">
            <img src={Icon1} height="30px" width="30px" />
            <h2>Access to a Diverse Customer Base</h2>
            <p>
              Get exposure to a broad and diverse customer base, increasing the
              potential for your products to reach a wide audience.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="pros-div">
            <img src={Icon1} height="30px" width="30px" />
            <h2>Efficient and Scalable Operations</h2>
            <p>
              From order placement to fulfillment, ProCURED enhances efficiency
              in your supply chain.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="pros-div">
            <img src={Icon1} height="30px" width="30px" />
            <h2>Flexible Payment Options</h2>
            <p>
              Flexible payment options, making transactions smoother and
              accommodating the diverse needs of buyers.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="pros-div">
            <img src={Icon1} height="30px" width="30px" />
            <h2>Competitive Pricing</h2>
            <p>
              Competitive pricing strategies gives the opportunity to offer bulk
              discounts
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 business-growth">
        <center>
          <h1>Grow your business with us</h1>
        </center>
      </div>
    </>
  );
};
