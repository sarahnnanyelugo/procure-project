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
    <div className="dashboard-accordion-container flexy col-md-12 ">
      {" "}
      <div className="col-md-5">
        <div className="col-md-11">
          <div onMouseEnter={() => displayImageImage()}>
            {" "}
            <h3>Seize Control of Your Time: Optimize Attendance !</h3>
          </div>
          <div onMouseEnter={() => displayImageImage2()}>
            <h3>Elevate Performance, Embrace Success</h3>
          </div>
          <div onMouseEnter={() => displayImageImage3()}>
            {" "}
            <h3>Empower Learning, Inspire Growth</h3>
          </div>
          <div onMouseEnter={() => displayImageImage4()}>
            <h3>Empower Learning, Inspire Growth</h3>
          </div>
        </div>
      </div>
      <div className="col-md-7 dashboard-display">
        {" "}
        <img className="   logo" src={updateImage} alt="Scholar" width="100%" />
      </div>
    </div>
  );
};
export default Features;
