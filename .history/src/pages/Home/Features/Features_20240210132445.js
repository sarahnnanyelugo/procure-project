import React, { useState } from "react";
import "./features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/feat1.png";
import HRDashboard3 from "../../../assets/images/feat3.png";
import HRDashboard2 from "../../../assets/images/feat2.png";
import HRDashboard4 from "../../../assets/images/feat4.png";

const Features = () => {
  const [updateImage, setUpdateImage] = useState(HRDashboard);
  function displayImageImage() {
    setUpdateImage(HRDashboard);
  }
  function displayImageImage2() {
    setUpdateImage(HRDashboard2);
  }
  function displayImageImage3() {
    setUpdateImage(HRDashboard3);
  }
  function displayImageImage4() {
    setUpdateImage(HRDashboard4);
  }
  return (
    <div className="features-container col-md-12 ">
      <h1>
        Streamline from search to fulfillment <br />
        with an all-in-one platform.
      </h1>
      <div className="flexy">
        <div className="col-md-5">
          <div className="col-md-11">
            <div
              onMouseEnter={() => displayImageImage()}
              className="image-controls"
            >
              {" "}
              <h3>Search & Browse</h3>
              <p>
                Explore, Search and filter products from vetted stores and
                select products of interest for your business.
              </p>
            </div>
            <br />
            <div
              onMouseEnter={() => displayImageImage2()}
              className="image-controls"
            >
              <h3>
                Customize & <br />
                Add to cart
              </h3>
              <p>
                Specify quantities, explore customization options, and add
                chosen items to your bulk cart.
              </p>
            </div>
            <br />
            <div
              onMouseEnter={() => displayImageImage3()}
              className="image-controls"
            >
              {" "}
              <h3>
                Check Out & <br />
                Payment
              </h3>
              <p>
                Initiate the checkout process, provide shipping details, and
                complete the payment using your preferred method.
              </p>
            </div>
            <br />
            <div
              onMouseEnter={() => displayImageImage4()}
              className="image-controls"
            >
              <h3>
                Confirmation & <br />
                Tracking
              </h3>
              <p>
                Receive an order confirmation, including an order number, and
                track your bulk order through the website for real-time updates.
              </p>
            </div>
            <br />
          </div>
        </div>
        <div className="col-md-5 dashboard-display offset-md-2">
          {" "}
          <img
            className="   logo"
            src={updateImage}
            alt="Scholar"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
export default Features;
