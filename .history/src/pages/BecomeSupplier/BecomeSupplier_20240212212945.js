import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../assets/images/web-video2.mp4";
import Icon1 from "../../assets/images/range.svg";
import Img1 from "../../assets/images/data.png";
import Img2 from "../../assets/images/coins.png";
import Img3 from "../../assets/images/views.png";
import Img4 from "../../assets/images/suit.png";
import Img5 from "../../assets/images/boxes.png";
import Img6 from "../../assets/images/1.svg";
import Img7 from "../../assets/images/2.svg";
import Img8 from "../../assets/images/3.svg";
import Img9 from "../../assets/images/4.svg";
import Img10 from "../../assets/images/list.png";
import Img11 from "../../assets/images/brand.png";
import Img12 from "../../assets/images/call-center.png";
import Img13 from "../../assets/images/shipping.png";
import Img14 from "../../assets/images/faq.png";
import "./become-supplier.scss";
import Testimonial from "../Home/Testimonial/Testimonial";
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
              <div className="col-md-6 offset-md-1">
                <img src={Img1} width="100%" />
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className="flexy">
              <div className="col-md-5">
                <p>
                  Discover unique business prospects and expand your marketing
                  efforts. Choose your industry to explore industry insights and
                  access thousands of business buyer requests daily. This opens
                  up opportunities for international expansion and exposure to
                  markets beyond traditional boundaries.
                </p>
              </div>
              <div className="col-md-6 offset-md-1">
                <img src={Img2} width="100%" />
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            {" "}
            <div className="flexy">
              <div className="col-md-5">
                <p>
                  Utilize ProCURED marketing and promotion features to
                  strategically expose your products by up to 115%. Benefit from
                  targeted campaigns, promotions, and exposure to enhance your
                  products’ visibility strategically positioned to capture the
                  attention of your precisely targeted audience.
                </p>
              </div>
              <div className="col-md-5 offset-md-2">
                <img src={Img3} width="80%" />
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            {" "}
            <div className="flexy">
              <div className="col-md-5">
                <p>
                  Rest assured that you have support every step of the way.
                  Whether you need assistance with onboarding, online chats,
                  local support during business hours, or tips for optimizing
                  your account — we are here to help.
                </p>
              </div>
              <div className="col-md-6 offset-md-1">
                <img src={Img4} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getting-started">
        <center>
          <h1>How to get started</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt">
            <img src={Img5} width="100%" />
          </div>
          <div className="col-md-5 offset-md-1 mt starting-steps">
            <div className="flexy flexyM">
              <img src={Img6} width="37px" height="37px" />
              <div>
                <h5>Create an account</h5>
                <p className="col-md-9">
                  Register for a Suppliers Account and provide basic information
                  about your business, such as your company name, contact
                  details, and tax identification number.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <img src={Img7} width="37px" height="37px" />
              <div>
                <h5>Set Up Your Seller Profile</h5>
                <p className="col-md-9">
                  Create a comprehensive seller profile that includes
                  information about your business, the types of products you
                  offer, and any unique selling points.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <img src={Img8} width="37px" height="37px" />
              <div>
                <h5>List Your Products</h5>
                <p className="col-md-9">
                  Use our listing tools to add your products to the catalog.
                  Include detailed product descriptions and high-quality images.
                </p>
              </div>
            </div>{" "}
            <div className="flexy flexyM">
              <img src={Img9} width="37px" height="37px" />
              <div>
                <h5>Start selling</h5>
                <p className="col-md-9">
                  Reach out to millions of business customers already on EYZ
                  Solution
                </p>
              </div>
            </div>
            <center>
              <button className="app-btn">Start selling</button>
            </center>
          </div>
        </div>
      </div>
      <div className="supplier-review">
        <center>
          <h1 className="review-heading">What suppliers with us says</h1>
        </center>
        <Testimonial />
      </div>

      <div className="col-md-10 offset-md-1 mt8 mobile-padding blog-div">
        <center>
          <h1>Resources on Blog</h1>
        </center>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt2 ">
          <div className="col">
            <div className="blog-post">
              <img src={Img10} width="100%" />
              <h5>Optimizing Product Listings for Maximum Visibility</h5>
              <p>
                Enhance your products’ discoverability on ProCURED with our
                comprehensive guide on optimizing product listings
              </p>
            </div>
          </div>
          <div className="col">
            <div className="blog-post">
              <img src={Img11} width="100%" />
              <h5>Crafting an Irresistible Brand Presence</h5>
              <p>
                Establish a memorable brand presence with our guide on effective
                branding strategies.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="blog-post">
              <img src={Img12} width="100%" />
              <h5>Providing Exceptional Customer Service for Seller Success</h5>
              <p>
                Build positive relationships with buyers, earn favorable
                reviews, and enhance your overall reputation on the platform.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="blog-post">
              <img src={Img13} width="100%" />
              <h5>Navigating Shipping and Logistics</h5>
              <p>
                Master the intricacies of shipping and logistics to ensure
                timely and transparent deliveries to enhance customer
                satisfaction and build a reputation for reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-div">
        <center>
          <h1>Frequently Asked Questions</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6">
            <FAQM
          </div>
          <div className="col-md-6">
            {" "}
            <img src={Img14} width="100%" />
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
