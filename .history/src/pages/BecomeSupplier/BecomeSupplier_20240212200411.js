import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video2.mp4";
import Icon1 from "../../assets/images/range.svg";
import Img1 from "../../assets/images/data.png";
import Img2 from "../../assets/images/coin.png";
import "./become-supplier.scss";
export const BecomeSupplier = () => {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";
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
        <div className="tabs ">
          <button
            className={`tab ${checkActive2(1, "active2")}`}
            onClick={() => handleClick2(1)}
          >
            Data & Analytics
          </button>
          <button
            className={`tab ${checkActive2(2, "active2")}`}
            onClick={() => handleClick2(2)}
            style={{ marginLeft: "20px" }}
          >
            Business Opportunities
          </button>{" "}
          <button
            className={`tab ${checkActive2(3, "active2")}`}
            onClick={() => handleClick2(3)}
            style={{ marginLeft: "20px" }}
          >
            Visibility
          </button>
          <button
            className={`tab ${checkActive2(4, "active2")}`}
            onClick={() => handleClick2(4)}
            style={{ marginLeft: "20px" }}
          >
            24/7 Customer support
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="flexy">
              <div className="col-md-5">
                <p>
                  Enhance your strategy by leveraging comprehensive data and
                  customer insights. Boost performance through dashboards that
                  provide detailed information on product visibility, click
                  rates, expenditure, average costs, store visits, and other
                  relevant metrics.
                </p>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          <div className={`panel ${checkActive(3, "active2")}`}>3</div>
          <div className={`panel ${checkActive(4, "active2")}`}>4</div>
        </div>
      </div>
    </>
  );
};
