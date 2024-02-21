import React from "react";
import Img1 from "../../assets/images/credible.png";
import Img2 from "../../assets/images/visible.png";
import Img3 from "../../assets/images/collab.png";
import Img4 from "../../assets/images/frontline.png";
import Banner from "../../assets/images/v-banner.png";
import Navbar from "../../components/Navbar/Navbar";
import "./verified-supplier.scss";
export const VerifiedSupplier = () => {
  return (
    <>
      <div id="cover verified-div">
        <img className="vid" width="100%" playsinline="" src={Banner}></img>
        <div className=" col-md-12 overlay verified-overlay">
          <Navbar colo="#fff" />
          <center>
            <div className="col-md-6 col-12  mt mobile-padding">
              <h6>Become a verified supplier</h6>
              <h1>Build more trust with your customers</h1>
            </div>
          </center>
        </div>
      </div>
      <div className="flexy">
        <div className="col-md-6 colored">
          <h2>Enhanced credibility</h2>
          <p>
            Gain trust and credibility from potential buyers as they prefer
            purchasing from verified sellers. Display a verified badge on your
            store, showcasing your commitment to quality and reliability.
          </p>
        </div>
        <div className="col-md-6 plain">
          <center>
            <img className="col-md-9" src={Img1} width="100%" />
          </center>
        </div>
      </div>
      <div className="flexy">
        <div className="col-md-5  offset-md-1 plain2">
          <img className="col-md-11" src={Img2} width="100%" />
        </div>
        <div className="col-md-6 colored2">
          <h2>Increased Visibility</h2>
          <p>
            Enjoy priority placement in search results, ensuring that your
            products are easily discoverable by potential buyers. Benefit from
            targeted promotions and marketing campaigns to drive traffic to your
            store.
          </p>
        </div>
      </div>
      <div className="flexy">
        <div className="col-md-6 colored">
          <h2>Community Collaboration</h2>
          <p>
            Connect with other verified sellers and form collaborations within
            our exclusive community. Benefit from shared knowledge, experiences,
            and industry insights to further improve your business.
          </p>
        </div>
        <div className="col-md-6 plain">
          <center>
            <img className="col-md-7" src={Img3} width="100%" />
          </center>
        </div>
      </div>

      <center>
        <div className="col-md-4 front-line-title">
          <h1>Be at the frontline</h1>
          <p>
            Suppliers who gets verified receive a variety of benefits to help
            them expand more quickly.
          </p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          {" "}
          <img className="col-md-12" src={Img4} width="100%" />
        </div>
        <div className="col-md-5 offset-md-1 front-line-list">
          <div className="flexy flexyM">
            <div className="circle" />
            <div>
              <h3>Exclusive Marketing Opportunities</h3>
              <p>
                Participate in special promotions, discounts, and marketing
                initiatives reserved for verified sellers.
              </p>
            </div>
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
